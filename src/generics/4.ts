type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User, updates: Partial<User>): User {
  return { ...initialValues, ...updates };
}

const originalProfile: User = {
  name: "UserUser",
  surname: "Surname",
  email: "user.user@example.com",
  password: "initialPassword",
};

const updatedProfile = createOrUpdateUser(originalProfile, {
  email: "user@mail.com",
  password: "password123",
});
