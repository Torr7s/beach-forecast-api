describe('Beach forecast functional tests', (): void => {
  it('should return a forecast with just a few times', async (): Promise<void> => {
    /* Cannot read properties of undefined (reading 'get') */
    const { body, status } = await global.testRequest.get('api/forecast');

    expect(body).toEqual({
      status: 'ok',
      message: 'Forecast controller test'
    });
  });
});