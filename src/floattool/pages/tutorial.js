import * as React from 'react';
import {
    Card,
    Container,
    CardContent,
    Typography,
    Grid,
    Alert,
    Accordion,
    AccordionDetails,
    AccordionSummary
} from "@mui/material";

export default function Tutorial() {
    return (
        <Container maxWidth="lg">
            <Container maxWidth="md">
                <Card elevation={2}>
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            Tutorial
                        </Typography>
                        <Typography variant="p" component="h4" fontWeight={'regular'}>
                            A complete guide of how to use FloatTool
                        </Typography>
                        <Typography variant="p" component="h4" fontWeight={'regular'}>
                            <ol>
                                <li>
                                    <Typography
                                        variant="a" component="a"
                                        href="#part1" color="#42a5f5">
                                        Installing
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="a" component="a"
                                        href="#part2" color="#42a5f5">
                                        Interface
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="a" component="a"
                                        href="#part3" color="#42a5f5">
                                        Settings
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="a" component="a"
                                        href="#part4" color="#42a5f5">
                                        Benchmark
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="a" component="a"
                                        href="#part5" color="#42a5f5">
                                        Searching
                                    </Typography>
                                </li>
                            </ol>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
            <br />
            <Card maxWidth="lg" elevation={2} id="part1">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Part 1: Installing
                    </Typography>
                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                        Download the <Typography
                            variant="a" component="a"
                            href="https://github.com/Prevter/FloatTool/releases/latest"
                            color="#42a5f5">
                            latest release archive from GitHub
                        </Typography> and extract <b>all files</b> to any directory you want.
                    </Typography>
                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                        Launch FloatTool.exe from the extracted directory.
                        You should see a window like this: <br />
                        <img src={require('../static/images/App.png')} alt="FloatTool" width='100%' />
                    </Typography>

                    <Typography variant="h6" component="h2">
                        Possible problems:
                    </Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<i className="material-icons">expand_more</i>}>
                            <Typography>
                                It opens a window with title "Windows protected your PC"
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        This is called SmartScreen which is a security feature of Windows. <br />
                                        Basically it prevents you from opening unsigned executables (which happens to be exactly the problem).
                                    </Typography>
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        You can bypass this by pressing "More info" which will show a button "Run anyway".
                                        This is a one-time action and will not be shown again.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <img src={require('../static/images/smartscreen.png')} alt="Smartscreen bypass" width="100%" />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<i className="material-icons">expand_more</i>}>
                            <Typography>
                                It throws an error saying "To run this application, you must install .NET Desktop Runtime 6.x.x (x64)."
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        The error is pretty self-explanatory. You have to install .NET 6.0 or higher.
                                    </Typography>
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        Proceed to the <Typography
                                            variant="a" component="a"
                                            href="https://dotnet.microsoft.com/en-us/download/dotnet/6.0/runtime"
                                            color="#42a5f5">
                                            .NET download page
                                        </Typography> and press "Download x64" below the "Run desktop apps"
                                    </Typography>
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        Wait for the download to finish, open the installer and follow the steps.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <img src={require('../static/images/install-dotnet.png')} alt=".NET install button" width="100%" />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>

                </CardContent>
            </Card>
            <br />
            <Card maxWidth="lg" elevation={2} id="part2">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Part 2: Interface
                    </Typography>
                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                        Lets quickly go over this diagram i made.
                        These will be the names i'll be refering to, when describing functionality.
                    </Typography>
                    <img src={require('../static/images/interface.png')} alt="Interface" width="100%" />
                    <Accordion>
                        <AccordionSummary expandIcon={<i className="material-icons">expand_more</i>}>
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Top buttons
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>Settings, Benchmark, Discord server</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                These buttons are used to open certain windows.
                            </Typography>
                            <br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                <b>Settings</b> can be used to change language, theme, currency and some other settings.
                            </Typography>
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                <b>Benchmark</b> is used to test your CPU speed to check how many combinations it can calculate.
                                You can also submit your score, and see others scores.
                            </Typography>
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                <b>Discord</b> button will prompt you to join our discord server.
                                You can ask questions there, or just share your thoughts and experience.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<i className="material-icons">expand_more</i>}>
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Skin settings
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>Weapon type, Skin, Quality, etc.</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={7}>
                                    <Alert severity="warning">
                                        This is for setting the skin which you will buy,
                                        not the skin you want to get.
                                    </Alert>
                                    <br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        This section is used to set the skin for the search.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        First three options are just dropdown menus to select weapon type, skin and quality.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        Then you can enable/disable the "StatTrak" option.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        The outcomes dropdown is used to select what skin you want to get.
                                        To make search more effective, it combines skins with the same result into one option.
                                        <br />
                                        You can check what skins are available for each option in the "<Typography
                                            variant="a" component="a"
                                            href="./table"
                                            color="#42a5f5">
                                            Drop table
                                        </Typography>" section. <br />
                                        You can also select "Search all" option, which will check every skin available for the selected options.
                                        This is used very rarely, but can have it's own uses.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        Finally, under all the options you can see what skin you have selected. <br />
                                        It also can show a warning icon if you entered something wrong.
                                        Just hover your mouse over it, to see the details.<br />
                                        On the screenshot and by default, it's set to "Nova | Predator (Field-Tested)".
                                        Which when crafted, will give you an 80% chance to get a desired float.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <img src={require('../static/images/skin-settings.png')} alt="Skin settings panel screenshot" width="100%" />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<i className="material-icons">expand_more</i>}>
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Search settings
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>Search mode, Desired Float, Count, Skip and buttons</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={7}>
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        This section is used to set what float you want to get, and some Steam related settings.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        Search mode defines how you want to search for float. <br />
                                        By default it is set to "Equals", but you can select any.
                                        If you change this, it will allow you to search for skins that have float lower or greater than
                                        the one you entered.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        The "Sort" and "Descending" checkboxes are used to sort the inputs to possibly make it easier to find the float you want.
                                        <br /> It's possibly better to use with "Greater" or "Lower" search mode.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        "Desired float" is the float you want to get. <br />
                                        <Alert severity="warning">
                                            This is not just a number input, it's a text input.
                                            <br />
                                            It means that "0.25" and "0.250000000" are actually different.
                                        </Alert>
                                        You can enter any value, but it will show you a warning if you entered something wrong. <br />
                                        It is important to not enter too many or too few digits.<br />
                                        If you enter too many digits, it won't be able to find anything.<br />
                                        If you enter too few digits, it probably will just crash the program, because it'll find combinations very fast that are usually just garbage.<br />
                                        You will probably be fine with 7-9 digits after the decimal point.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        "Count" input is capped from 10 to 100. <br />
                                        It defines how many skins it will load into memory from the Steam Marketplace. <br />
                                        Usually, you would just leave it at 100.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        "Skip" input is a bit trickier to understand. <br />
                                        It defines how many skins it will skip from the top of the list on marketplace. <br />
                                        On the actual marketplace, it's used to show pages. If skip is 10, it will show page 2 and so on. <br />
                                        This option is used to prevent random item buy while you are searching.
                                        For some cheaper items, you should probably set it to 10-20.<br />
                                        If you are searching more expensive items, you should probably set it to a lower value.<br />
                                        Don't set it too high, because it will make average price more expensive.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        Finally we have "Start" and "Find one" buttons, which you can guess starts the search. <br />
                                        "Find one" launches the search, but stops when it found one result. <br />
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        Below everything we have a progress bar, which just shows current progress of the search.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <img src={require('../static/images/search-settings.png')} alt="Search panel screenshot" width="100%" />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<i className="material-icons">expand_more</i>}>
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Bottom panel
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>Thread count, Current speed, Checked combinations, Craft range</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={7}>
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        This section is used to change the thread count, and see some status information.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        Thread count is the number of threads that will be used to search for float. <br />
                                        Usually, you would just leave it as default, because it checks how many threads your computer has. <br />
                                        Don't increase it, because it will take more resources and make the program even slower or even crash your PC if it's too high. <br />
                                        On some Intel CPUs, it also can be useful to decrease it a little <br />
                                        (Intel CPUs usually have fewer cache than AMDs, which makes them a bit slower. Fewer threads helps to distribute more cache to each one). <br />
                                        You can play with this option in benchmark to better see how it affects your search speed.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        Current speed will show how many combinations per second the program is doing.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        Checked combinations will show how many combinations have been checked and how many there are in total.
                                    </Typography><br />
                                    <Typography variant="p" component="h4" fontWeight={'regular'}>
                                        Craft range is utility function which will show you the range of the item you would get <br />
                                        If everything is set up correctly, desired float should be in this range. <br />
                                        If not, you should probably change skin quality in skin settings.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <img src={require('../static/images/bottom-panel.png')} alt="Bottom panel screenshot" width="100%" />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </CardContent>
            </Card>
            <br />
            <Card maxWidth="lg" elevation={2} id="part3">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Part 3: Settings
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                Before begginning using the program, you should first set up your settings.
                            </Typography>
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                Open settings with the button on the top panel
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                Here you can change app language if you need it. <br />
                                (Some translations are incomplete and may be incorrect, i'm working on a translation editor for this, so you can help translate it).
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                You should set currency to the one you use on your Steam account. <br />
                                This will help in sorting skins correctly and showing you total price in your currency.
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                App allows you to change it's theme <br />
                                By default, there are Dark and Light themes. <br />
                                But you can visit <Typography
                                    variant="a" component="a"
                                    href="./themes"
                                    color="#42a5f5">
                                    Themes
                                </Typography> page to check other themes.
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                "Enable sound" option if turned on, will play a sound when it finds a combination.
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                "Check for updates" will allow you to automatically check for updates on startup.
                                It will show you a message if there is a new version available, and prompt you to download it.
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                "Discord Rich Presence" is more cosmetic option than useful. <br />
                                It will show your friends on discord what you are doing right now. <br />
                                <i>Check screenshot to see how it looks</i>
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                Settings are saved once you close the settings window.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <img src={require('../static/images/settings.png')} alt="Settings window" width="100%" />
                            <img src={require('../static/images/discord-rpc.png')} alt="Discord RPC example" width="100%" />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card><br />
            <Card maxWidth="lg" elevation={2} id="part4">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Part 4: Benchmark
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                This window is used to test your CPUs performance. <br />
                                Open it with the button on the top panel
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                On the top, it shows you the name of your CPU and how many threads it has.
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                You can see the list of all benchmarks reported by other users <br />
                                This list is also available on <Typography
                                    variant="a" component="a"
                                    href="./benchmarks"
                                    color="#42a5f5">
                                    Benchmarks
                                </Typography> page.
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                The "Show only current version" checkbox is used to hide benchmarks from different versions.
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                You can change the number of threads you want to use. <br />
                                Usually it equals to the number of threads your CPU has.
                                But on some CPUs, especially Intel, it can be lower.<br />
                                You should experiment with this option to find the number with the best performance.
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                To begin benchmarking, click the "Start" button. <br />
                                This will start the benchmark and as soon as it finishes, it will show you the results below the version checkbox.<br />
                                By default those results are set to values with the highest performance for your CPU. <br />
                                Your CPU in the list will be highligted in green. <br />
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                You can press "Update" button to update the list of benchmarks. <br />
                                If you have just benchmarked, you can also press "Publish" button to send your results to the server. <br />
                                I love data :)
                            </Typography><br />
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                Sometimes updates give more performance, so you can check it after every update. <br />
                                If you publish your results, it will give new users more idea what to expect from their CPU.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <img src={require('../static/images/benchmark.png')} alt="Settings window" width="100%" />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card><br />
            <Card maxWidth="lg" elevation={2} id="part5">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Part 5: Searching
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <Typography variant="p" component="h4" fontWeight={'regular'}>
                                To be continued...
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container >
    );
}