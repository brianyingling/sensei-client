const CREATE_SESSION_MUTATION = `
  mutation createSession($email: String!, $password: String!) {
    createSession(email: $email, password: $password) {
      id
      createdAt 
      expiresAt 
      userId
    }
}`;

export {
  CREATE_SESSION_MUTATION
};