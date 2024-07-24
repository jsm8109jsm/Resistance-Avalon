export const getAccessToken = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.accessToken}`,
  },
});

export const getRefreshToken = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.refreshToken}`,
  },
});
