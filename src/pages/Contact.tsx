import { Container, Typography, TextField, Button, Box, Stack, Link } from '@mui/material'

export default function Contact() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>Contact</Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Want to collaborate or have a project in mind? Send a message.
      </Typography>
      <Box component="form" action="https://formspree.io/f/your-id" method="POST">
        <Stack spacing={2}>
          <TextField name="name" label="Name" fullWidth required />
          <TextField name="email" label="Email" type="email" fullWidth required />
          <TextField name="message" label="Message" fullWidth multiline minRows={4} required />
          <Button type="submit" size="large">Send</Button>
        </Stack>
      </Box>
      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Link href="mailto:you@example.com">Email</Link>
        <Link href="https://www.linkedin.com/in/" target="_blank" rel="noopener">LinkedIn</Link>
        <Link href="https://github.com/" target="_blank" rel="noopener">GitHub</Link>
      </Stack>
    </Container>
  )
}
