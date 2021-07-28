import chalk from 'chalk'
import boxen from 'boxen'
import {getIPAdress,toArrayBuffer,toBuffer} from '../utils/index.js'

const tips = (port) =>{
    const myHost = getIPAdress();
    // 打印情况
    let message = chalk.green('Serving!');
    message += `\n\n${chalk.bold(`文件模型访问请使用:`)} `;
    message += `\n${chalk.bold(`- 本地:`)}         http://localhost:${port}/models`;
    message += `\n${chalk.bold('- 局域网:')}       http://${myHost}:${port}/models`;
    message += `\n\n${chalk.bold(`图片访问请使用:`)} `;
    message += `\n${chalk.bold(`- 本地:`)}         http://localhost:${port}/images`;
    message += `\n${chalk.bold('- 局域网:')}       http://${myHost}:${port}/images`;
    message += `\n\n${chalk.bold(`上传图片文件请使用:`)} `;
    message += `\n${chalk.bold(`- 本地:`)}         http://localhost:${port}/uploadImage`;
    message += `\n${chalk.bold('- 局域网:')}       http://${myHost}:${port}/uploadImage`;
    message += `\n\n${chalk.bold(`上传全局模型文件请使用:`)} `;
    message += `\n${chalk.bold(`- 本地:`)}         http://localhost:${port}/uploadGlobalModel`;
    message += `\n${chalk.bold('- 局域网:')}       http://${myHost}:${port}/uploadGlobalModel`;
    message += `\n\n${chalk.bold(`上传全局模型文件「同文件」请使用:`)} `;
    message += `\n${chalk.bold(`- 本地:`)}         http://localhost:${port}/uploadGlobalModelSameDir`;
    message += `\n${chalk.bold('- 局域网:')}       http://${myHost}:${port}/uploadGlobalModelSameDir`;
    message += `\n\n${chalk.bold(`上传客户端模型文件请使用:`)} `;
    message += `\n${chalk.bold(`- 本地:`)}         http://localhost:${port}/uploadClientModel`;
    message += `\n${chalk.bold('- 局域网:')}       http://${myHost}:${port}/uploadClientModel`;
    message += `\n\n${chalk.bold(`上传模型文件请使用「tfjs」:`)} `;
    message += `\n${chalk.bold(`- 本地:`)}         http://localhost:${port}/upload`;
    message += `\n${chalk.bold('- 局域网:')}       http://${myHost}:${port}/upload`;
    console.log(boxen(message, {
        padding: 1,
        borderColor: 'green',
        margin: 1
    }));
}

export default tips

