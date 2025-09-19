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

                    document.addEventListener('DOMContentLoaded', () => {
                    const navLinks = document.querySelectorAll('.nav-link');

                    function clearActive() {
                        document.querySelector('.nav-link.active')?.classList.remove('active');
                    }

                    
                    const currentHash = window.location.hash || '#home';
                    clearActive();
                    document.querySelector(`.nav-link[href="${currentHash}"]`)?.classList.add('active');

                    navLinks.forEach(link => {
                        link.addEventListener('click', (e) => {
                        
                        clearActive();
                        e.currentTarget.classList.add('active');
                        });
                    });
});
