# Page snapshot

```yaml
- generic [ref=e5]:
  - generic [ref=e6]:
    - heading "Welcome Back" [level=1] [ref=e7]
    - paragraph [ref=e8]: Sign in to your Optimum Smart System account
  - generic [ref=e9]:
    - generic [ref=e10]:
      - generic [ref=e11]:
        - img [ref=e12]
        - text: Username
      - textbox "Username" [ref=e14]:
        - /placeholder: Enter your username
    - generic [ref=e15]:
      - generic [ref=e16]:
        - img [ref=e17]
        - text: Password
      - generic [ref=e19]:
        - textbox "Password" [ref=e20]:
          - /placeholder: Enter your password
        - button "Show password" [ref=e21] [cursor=pointer]:
          - img [ref=e22]
    - button "Sign In" [ref=e25] [cursor=pointer]
  - paragraph [ref=e27]:
    - text: Don't have an account?
    - link "Sign up" [ref=e28] [cursor=pointer]:
      - /url: /signup
```