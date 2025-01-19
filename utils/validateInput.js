import validator from 'validator';

const validateInput = (input, setSnackInfo, setButtonDisabled, setLoading) => {

    const { email, password, confirmPassword } = input;

    // Validate email
    let validEmail = validator.isEmail(email);
    if (!validEmail) {
        setSnackInfo(prev => ({ ...prev, openSnack: true, type: "warning", message: "Invalid email" }));
        setButtonDisabled(false);
        setLoading(false);
        return false;
    }

    // Check if passwords match (for confirmPassword)
    if (confirmPassword) {
        if (password !== confirmPassword) {
            setSnackInfo(prev => ({ ...prev, openSnack: true, type: "warning", message: "Passwords do not match" }));
            setButtonDisabled(false);
            setLoading(false);
            return false;
        }
    }

    // Validate password length
    if (password && password.length < 6) {
        setSnackInfo(prev => ({ ...prev, openSnack: true, type: "warning", message: "Password cannot be less than 6 characters" }));
        setButtonDisabled(false);
        setLoading(false);
        return false;
    }

    if (password) {
        // Validate strong password
        const strongPassword = validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        });

        if (!strongPassword) {
            setSnackInfo(prev => ({
                ...prev,
                openSnack: true,
                type: "warning",
                message: "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.",
            }));
            setButtonDisabled(false);
            setLoading(false);
            return false;
        }
    }



    return true;
};

export default validateInput;
