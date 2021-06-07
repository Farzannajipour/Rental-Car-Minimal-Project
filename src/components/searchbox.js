import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles( ( theme ) => ( {
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing( 2 ),
    },
    title: {
        display: 'none',
        [ theme.breakpoints.up( 'sm' ) ]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade( theme.palette.common.white, 0.15 ),
        '&:hover': {
            backgroundColor: fade( theme.palette.common.white, 0.25 ),
        },
        marginRight: theme.spacing( 2 ),
        marginLeft: 0,
        width: '100%',
        [ theme.breakpoints.up( 'sm' ) ]: {
            marginLeft: theme.spacing( 3 ),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing( 0, 2 ),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing( 1, 1, 1, 0 ),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${ theme.spacing( 4 ) }px)`,
        transition: theme.transitions.create( 'width' ),
        width: '100%',
        [ theme.breakpoints.up( 'md' ) ]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [ theme.breakpoints.up( 'md' ) ]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [ theme.breakpoints.up( 'md' ) ]: {
            display: 'none',
        },
    },
} ) );

export default function SearchBox() {
    const classes = useStyles();
    const [ anchorEl, setAnchorEl ] = React.useState( null );
    const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] = React.useState( null );

    const isMenuOpen = Boolean( anchorEl );
    const isMobileMenuOpen = Boolean( mobileMoreAnchorEl );
    return (
        <div className={ classes.grow }>
            <form className={ classes.root } noValidate autoComplete="off">
                <div className={ classes.search }>
                    <div className={ classes.searchIcon }>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={ {
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        } }
                        inputProps={ { 'aria-label': 'search' } }
                    />
                </div>
            </form>
        </div>
    )
}
// *https://www.registers.service.gov.uk/registers/country/use-the-api*
// import fetch from 'cross-fetch';
// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import CircularProgress from '@material-ui/core/CircularProgress';
//
// function sleep(delay = 0) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, delay);
//     });
// }
//
// export default function SearchBox() {
//     const [open, setOpen] = React.useState(false);
//     const [options, setOptions] = React.useState([]);
//     const loading = open && options.length === 0;
//
//     React.useEffect(() => {
//         let active = true;
//
//         if (!loading) {
//             return undefined;
//         }
//
//         (async () => {
//             const response = await fetch('https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en?solrRows=6&solTerm=Amsterdam');
//             await sleep(1e3); // For demo purposes.
//             const countries = await response.json();
//
//             if (active) {
//                 setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
//             }
//         })();
//
//         return () => {
//             active = false;
//         };
//     }, [loading]);
//
//     React.useEffect(() => {
//         if (!open) {
//             setOptions([]);
//         }
//     }, [open]);
//
//     return (
//         <Autocomplete
//             id="asynchronous-demo"
//             style={{ width: 300 }}
//             open={open}
//             onOpen={() => {
//                 setOpen(true);
//             }}
//             onClose={() => {
//                 setOpen(false);
//             }}
//             getOptionSelected={(option, value) => option.name === value.name}
//             getOptionLabel={(option) => option.name}
//             options={options}
//             loading={loading}
//             renderInput={(params) => (
//                 <TextField
//                     {...params}
//                     label="Asynchronous"
//                     variant="outlined"
//                     InputProps={{
//                         ...params.InputProps,
//                         endAdornment: (
//                             <React.Fragment>
//                                 {loading ? <CircularProgress color="inherit" size={20} /> : null}
//                                 {params.InputProps.endAdornment}
//                             </React.Fragment>
//                         ),
//                     }}
//                 />
//             )}
//         />
//     );
// }
