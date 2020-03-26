var CredentialFactory = new (require("./credential/CredentialFactory"))()

module.exports = {
    credential: CredentialFactory.makeCredential(),
    port: "0.0.0.0:3000"
}