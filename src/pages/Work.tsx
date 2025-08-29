import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  CardActionArea,
} from "@mui/material";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
};

const projects: Project[] = [
  {
    title: "Design System",
    description: "Reusable components and tokens for consistent UI.",
    tags: ["MUI", "Design"],
    image: "https://via.placeholder.com/600x360?text=Design+System",
  },
  {
    title: "Portfolio Website",
    description: "This site built with React + Vite + MUI.",
    tags: ["React", "Vite", "MUI"],
    image: "https://via.placeholder.com/600x360?text=Portfolio",
  },
  {
    title: "Dashboard",
    description: "Data visualization and insights.",
    tags: ["UX", "Charts"],
    image: "https://via.placeholder.com/600x360?text=Dashboard",
  },
];

export default function Work() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Selected work
      </Typography>
      <Grid container spacing={3}>
        {projects.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.title}>
            <Card elevation={2}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={p.image}
                  alt={p.title}
                />
                <CardContent>
                  <Typography variant="h6">{p.title}</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {p.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mt: 2, flexWrap: "wrap" }}
                  >
                    {p.tags.map((t) => (
                      <Chip key={t} label={t} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
