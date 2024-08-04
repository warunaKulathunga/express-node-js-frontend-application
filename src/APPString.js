const APPString = {
  welcomeMessage: "Welcome to our application!",
  login: {
    title: "Welcome back",
    subTitle: "Welcome back! Please enter your details",
    footerTitle: "Don't have an account?",
  },
  register: {
    title: "Create a new account",
    subTitle: "It's quick and easy.",
    footerTitle: "Already have an account?",
  },
  button: {
    signIn: "Sign in",
    signUp: "Sign up",
  },
  inputLabel: {
    email: "Email",
    password: "Password",
    phoneNumber: "Phone Number",
  },
  dashboard: {
    title: "Dashboard",
    addButton: "Add Product",
    updateButton: "Update Product",
  },
  validation: {
    email: {
      invalid: "Invalid email address",
      required: "Email is required",
    },
    password: {
      minLength: "Password must be at least 6 characters",
      required: "Password is required",
    },
    phoneNumber: {
      required: "Phone number is required",
      matches: "Phone number must be exactly 10 digits",
    },
  },
  tostMessage: {
    success: {
      loginSuccess: "User login successful!",
      productDeleteSuccess: "Product deleted successfully",
    },
    failed: {
      deleteError: "Failed to delete product",
    },
  },
};

export default APPString;
