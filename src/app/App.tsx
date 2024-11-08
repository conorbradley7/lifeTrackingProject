import AppInner from "./AppInner.tsx";
import {Box} from "@mui/material";

const classes = {
  root: {
    height: '100%',
  },
}

const App = () => {

  return (
      <Box sx={classes.root}>
        {/*// <Toastr />*/}
        <AppInner/>
      </Box>
  )
}

export default App
