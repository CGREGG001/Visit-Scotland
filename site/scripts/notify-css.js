const notifier = require('node-notifier');
const { exec } = require('child_process');

exec('npm run build:css', (error, stdout, stderr) => {
    if (error) {
        notifier.notify({
            title: '❌ CSS Compilation Error',
            message: error.message || 'An error occurred while compiling CSS.',
            sound: true,
            timeout: 5
        });
        console.error(stderr);
        return;
    }

    notifier.notify({
        title: 'CSS Compiled',
        message: '✅ main.min.css has been updated.',
        sound: true,
        timeout: 3
    });
    console.log(stdout);
});
