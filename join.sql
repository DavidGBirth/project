SELECT * FROM alunos_cursos
INNER JOIN alunos ON alunos.id = alunos_cursos.id_aluno;