// config.js
const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");

const ssmClient = new SSMClient({ region: process.env.AWS_REGION || 'us-east-1' });

module.exports.getParam = async (name) => {
  try {
    const command = new GetParameterCommand({ Name: name });
    const response = await ssmClient.send(command); // Use ssmClient, not ssm
    return response.Parameter.Value;
  } catch (err) {
    console.error("Error fetching parameter:", err);
    return "Default Message";
  }
};

module.exports.WELCOME_MESSAGE = "WELCOME_MESSAGE";