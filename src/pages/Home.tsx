import { Container, Box, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 10, display: "grid", gap: 3 }}>
        <Typography variant="h2">Hi, I'm Pranoppal</Typography>
        <Typography variant="h5" color="text.secondary">
          UI/UX designer and software developer. I design intuitive experiences
          and build performant web apps.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            component={RouterLink}
            to="/work"
          >
            View my work
          </Button>
          <Button
            color="secondary"
            size="large"
            variant="outlined"
            component={RouterLink}
            to="/contact"
          >
            Get in touch
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
