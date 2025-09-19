 const sidebar = document.querySelector('.sidebar');
                    const iconWrapper = document.querySelector('.icon-wrapper');
                    const navLinksSpan = document.querySelectorAll('.nav-link span');
                    const navLinks = document.querySelectorAll('.nav-links');
                    const iconWrapperText = document.querySelector('.icon-wrapper span');

                    iconWrapper.addEventListener('click', () => {
                        sidebar.classList.toggle('collapsed');
                        navLinksSpan.forEach(span => {
                            span.classList.toggle('hidden');
                        });

                        if(iconWrapperText.textContent === 'X') {
                            iconWrapperText.textContent = '+';
                        } else {
                            iconWrapperText.textContent = 'X';
                        }
                    });


                    navLinks.forEach(link => {
                        link.addEventListener('click', (event) => {
                            // Check if the clicked link is already active
                            if (link.classList.contains('active')) return;  
                            
                            // Remove the 'active' class from the currently active link
                            document.querySelector('.nav-link.active').classList.remove('active');
                            
                            // Add the 'active' class to the clicked link
                            event.currentTarget.closest('.nav-link').classList.add('active');
                        });
                    });

