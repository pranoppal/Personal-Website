import { Container, Typography, Stack, Chip } from '@mui/material'

export default function About() {
  const skills = ['UX Research', 'Wireframing', 'Prototyping', 'React', 'TypeScript', 'Design Systems']
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>About</Typography>
      <Typography variant="body1" color="text.secondary">
        I'm a UI/UX designer with a background in software development. I craft experiences end-to-end—from research and IA to polished UI and code.
      </Typography>
      <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>Skills</Typography>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {skills.map(s => <Chip key={s} label={s} />)}
      </Stack>
    </Container>
  )
}
