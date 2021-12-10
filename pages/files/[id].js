import React from "react";

function DynamicFile({ file }) {
  return (
    <div>
      <h1>File Title: {file.title} </h1>
    </div>
  );
}

export default DynamicFile;

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/file/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, { Location: "/files" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  return {
    props: { file: data },
  };
}
