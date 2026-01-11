# Page snapshot

```yaml
- generic [ref=e5]:
  - generic [ref=e6]:
    - img [ref=e8]
    - heading "Welcome Back" [level=1] [ref=e10]
    - paragraph [ref=e11]: Sign in to your Optimum Smart System account
  - generic [ref=e12]:
    - generic [ref=e13]:
      - generic [ref=e14]:
        - img [ref=e15]
        - text: Username
      - textbox "Username" [ref=e17]:
        - /placeholder: Enter your username
    - generic [ref=e18]:
      - generic [ref=e19]:
        - img [ref=e20]
        - text: Password
      - generic [ref=e22]:
        - textbox "Password" [ref=e23]:
          - /placeholder: Enter your password
        - button "Show password" [ref=e24] [cursor=pointer]:
          - img [ref=e25]
    - button "Sign In" [ref=e28] [cursor=pointer]
  - paragraph [ref=e30]:
    - text: Don't have an account?
    - link "Sign up" [ref=e31]:
      - /url: /signup
```