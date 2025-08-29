import { Box, Container, Typography, Link, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ borderTop: 1, borderColor: "divider", py: 3 }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Pranoppal Kalita
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="/about" underline="hover">
              About
            </Link>
            <Link href="/work" underline="hover">
              Work
            </Link>
            <Link href="/contact" underline="hover">
              Contact
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
