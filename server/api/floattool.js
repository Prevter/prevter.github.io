module.exports = {
    load: function (req, res, db, callback) {
        let response = { status: 200 };
        let sql = "SELECT * FROM FloatTool_Benchmarks";

        if (req.query.version) {
            sql += " WHERE Version = '" + req.query.version + "'";
        }

        db.all(sql, (err, rows) => {
            if (err) {
                console.log(err);
                response.status = 500;
                response.message = "Error loading benchmarks";
                callback(response);
            } else {
                response.count = rows.length;
                let benchmarks = [];
                rows.forEach((row) => {
                    benchmarks.push({
                        name: row.cpu_name,
                        threads: row.threads,
                        multithread: row.speed_multi,
                        singlethread: row.speed_single,
                        version: row.version,
                    });
                });

                benchmarks.sort((a, b) => {
                    return b.multithread - a.multithread;
                });

                response.items = benchmarks;
                callback(response);
            }
        });
    },

    submit: function (req, res, db, callback) {
        let response = { status: 200 };

        // Check if submitted from FloatTool. 
        // Basic check, but prevents random submissions.
        if (!req.headers['user-agent'].startsWith("FloatTool/")) {
            response.status = 403;
            response.message = "Invalid user-agent";
            callback(response);
            return;
        }

        // Else get version string from user-agent
        let version = req.headers['user-agent'].split("/")[1];

        let sql = "INSERT INTO FloatTool_Benchmarks (cpu_name, threads, speed_multi, speed_single, version) VALUES (?, ?, ?, ?, ?)";
        let values = [req.query.cpu, req.query.threads, req.query.multicore, req.query.singlecore, version];

        // if any of the values are missing, return error
        if (!req.query.cpu || !req.query.threads || !req.query.multicore || !req.query.singlecore) {
            response.status = 400;
            response.message = "Missing required parameters";
            callback(response);
            return;
        }

        // if there is already a row with the same cpu name and version, update it if the new values are better
        db.get("SELECT * FROM FloatTool_Benchmarks WHERE cpu_name = ? AND version = ?", [req.query.cpu, version], (err, row) => {
            if (err) {
                console.log(err);
                response.status = 500;
                response.message = "Error loading benchmarks";
                callback(response);
            } else if (row) {
                if (row.speed_multi < req.query.multicore) {
                    let sql = "UPDATE FloatTool_Benchmarks SET speed_multi = ?, speed_single = ? WHERE cpu_name = ? AND version = ?";
                    db.run(sql, [req.query.multicore, req.query.singlecore], (err) => {
                        if (err) {
                            console.log(err);
                            response.status = 500;
                            response.message = "Error submitting benchmark";
                            callback(response);
                        } else {
                            callback(response);
                        }
                    });
                } else {
                    response.status = 409;
                    response.message = "Benchmark already exists";
                    callback(response);
                }
            } else {
                db.run(sql, values, (err) => {
                    if (err) {
                        console.log(err);
                        response.status = 500;
                        response.message = "Error submitting benchmark";
                        callback(response);
                    } else {
                        callback(response);
                    }
                });
            }
        });
    }
}