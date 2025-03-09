// config.js
const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");

const ssm = new SSMClient({ region: process.env.AWS_REGION });

// Export the function directly
module.exports.getParam = async (name) => {
  try {
    const command = new GetParameterCommand({ Name: name });
    const response = await ssm.send(command);
    return response.Parameter.Value;
  } catch (err) {
    console.error("Error fetching parameter:", err);
    return "Default Message";
  }
};

// Export parameter names for reference
module.exports.WELCOME_MESSAGE = "WELCOME_MESSAGE"