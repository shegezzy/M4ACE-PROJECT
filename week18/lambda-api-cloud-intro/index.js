exports.handler = async (event) => {
    const message = process.env.GREETING || "Hello from Lambda!";
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        message,
        statusCode: 200
      }),
    };
  };
  