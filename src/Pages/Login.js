import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
export default function Login(){
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("Sub a Github" , {
      variant: "warning",
    });
  }
  return (
    <>
      <h1>Login</h1>
      <Button variant="contained" onClick={handleClick}>Open</Button>
    </>
  )
}