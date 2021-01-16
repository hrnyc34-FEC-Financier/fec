module.exports = {
  API_TOKEN : '',
};

/*
  Our API server authenticates users with GitHub Personal Access Tokens. To obtain a token:

  1. Go to: https://github.com/settings/tokens

  2. Click "Generate new token"

  3. Given the Token a Description ("Hackreactor Capstone API", or whatever is most descriptive to you)

  4. Under Select Scopes, select the following: (You may select more for more featuers this API will offer in the future)
      read:org
      user
      read:user
      user:email
      user:follow

  5. Generate Token
  Note that this token is only viewable once, at generation time. Make sure to copy it to a secure place and never check it into your git history.
 */