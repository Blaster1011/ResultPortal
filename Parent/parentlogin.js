        // Phone form submission
        document.getElementById('phoneForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const phone = document.getElementById('phone').value;
            const phoneError = document.getElementById('phoneError');
            
            if (phone.length !== 10 || !/^\d+$/.test(phone)) {
                phoneError.classList.remove('hidden');
                return;
            }
            
            phoneError.classList.add('hidden');
            document.getElementById('phoneDisplay').textContent = '+91 ' + phone;
            document.getElementById('otpSection').classList.remove('hidden');
            // Simulate OTP sending
            alert('OTP sent successfully!');
        });

        // OTP input handling
        const otpInputs = document.querySelectorAll('.otp-input');
        otpInputs.forEach((input, index) => {
            input.addEventListener('keyup', (e) => {
                if (e.key >= '0' && e.key <= '9') {
                    if (index < otpInputs.length - 1) {
                        otpInputs[index + 1].focus();
                    }
                } else if (e.key === 'Backspace') {
                    if (index > 0) {
                        otpInputs[index - 1].focus();
                    }
                }
            });
        });

        // Verify OTP
        document.getElementById('verifyOtp').addEventListener('click', function() {
            let otp = '';
            otpInputs.forEach(input => {
                otp += input.value;
            });

            if (otp.length !== 6) {
                alert('Please enter a valid 6-digit OTP');
                return;
            }

            // Simulate OTP verification
            window.location.href = 'dashboard.html';
        });

        // Resend OTP
        document.getElementById('resendOtp').addEventListener('click', function() {
            alert('New OTP sent successfully!');
        });