const readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);

        const cookies = document.cookie,
            el_user = document.getElementById('user'),
            el_psw = document.getElementById('psw');

        try {
            cookies_arr = cookies.split(';');
            el_user.value = cookies_arr[0].split('=')[1] || '';
            el_psw.value = cookies_arr[1].split('=')[1] || '';
        } catch (e) {

        } finally {

            document.getElementById('login').addEventListener('submit', function (e) {
                e.preventDefault();
                const user = el_user.value.toUpperCase().trim()
                const psw = el_psw.value.toUpperCase().trim()

                document.cookie = 'user=' + user;
                document.cookie = 'psw=' + psw;

                chrome.tabs.executeScript({ code: 'var param_user = "' + user + '",param_psw = "' + psw + '";' },
                    function () {
                        chrome.tabs.executeScript({
                            file: 'js/do_it.js'
                        });

                        window.close();
                    }
                )
            });
        }
    }
}, 10);
