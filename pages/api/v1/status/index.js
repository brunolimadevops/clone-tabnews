function status(request, response) {
  response
    .status(200)
    .json({ resposta: "Alunos do curso.dev São pessoas acima da média!" });
}

export default status;
