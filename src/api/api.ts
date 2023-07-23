let url = 'http://localhost:4000/graphql'; // Замените на адрес вашего GraphQL сервера
const PRODUCTION = process.env.NODE_ENV === 'production'
if (PRODUCTION) {
    url = 'https://stunning-phoenix-5ca9f7.netlify.app/graphql'
}
interface CreateUserResponse {
  id: string;
  name: string;
  email: string;
}

const createUser = async (name: string, email: string): Promise<CreateUserResponse> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: `
          mutation {
            createUser(name: "${name}", email: "${email}") {
              id
              name
              email
            }
          }
        `,
      }),
    });

    const data = await response.json();

    if (data.errors) {
      // Если есть ошибки в ответе, обрабатываем их
      throw new Error('Failed to create user: ' + data.errors[0].message);
    }

    return data.data.createUser; // Возвращаем созданного пользователя
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
};

export { createUser };
