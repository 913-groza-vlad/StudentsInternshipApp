import { Button, Container, Typography } from "@mui/material";
import { LoginComponent } from "../components/login/login";
import { useNavigate } from "react-router-dom";

export const StartPage = () => {
  const navigate = useNavigate();
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "20vh"
      }}
    >
      <Typography 
        variant="h4"
        style={{
          marginBottom: "25px",
          color: "#3f51b5",
        }}>
        Student Internships App
        </Typography>
      <LoginComponent />
      <Button 
        onClick={() => navigate("/register")}
        style={{ textTransform: "none"}}
      >
          Don't have an account? Register now
      </Button>
    </Container>
  );
};