import { Grid } from "@mui/material";

export default function BenchmarkBar(params) {
    const { benchmark, percent } = params;

    let className = "benchmark-bar-progress" + (benchmark.name.startsWith("AMD") ? " amd" : " intel");

    return (
        <div className="benchmark-bar">
            <div className={className} style={{ width: `${percent}%` }}></div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                height: '32px',
                padding: '0px 8px',
                width: '100%',
                position: 'relative',
                top: '-32px',
            }}>
                <div style={{ display: 'inline-block' }}>
                    <span className="benchmark-bar-name">
                        {benchmark.name}
                    </span>
                    <span className="benchmark-bar-caption">
                        {benchmark.threads} Threads [{benchmark.version}]
                    </span>
                </div>
                <div style={{
                    marginLeft: 'auto',
                    textAlign: 'right',
                }}>
                    <div>
                        <p className="benchmark-bar-multiscore">{benchmark.multithread}</p>
                        <p className="benchmark-bar-singlescore">{benchmark.singlethread}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}