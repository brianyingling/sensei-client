const GET_SESSION_QUERY = `
{
  session(me: true) {
    id 
    userId
  }
}`;

export {
  GET_SESSION_QUERY,
};
