import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";

function File({ files }) {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", p: 1, m: 3 }}>
        <Typography variant="h4" gutterBottom component="div">
          All Your Files Below
        </Typography>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {files.map((file) => (
          <Grid item xs={6} key={file.id}>
            <Box p={5}>
              <Link href="/files/[id]" as={`/files/${file.id}`} passHref>
                <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                  <Paper
                    sx={{
                      textAlign: "center",
                      height: 60,
                      lineHeight: "60px",
                    }}
                    elevation={5}
                  >
                    <strong>{file.title}</strong>
                  </Paper>
                </a>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default File;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/file");
  const { data } = await res.json();

  return {
    props: { files: data },
  };
}
