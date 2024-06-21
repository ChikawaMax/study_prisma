const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Create = async () => {
    const user = await prisma.user.create({
        data: {
            name: 'tiwawa',
            email: 'tiwawa@prisma.io',
        },
    });
    console.log(user);
};

const Find = async () => {
    const users = await prisma.user.findMany();
    return users;
};

// 非同期関数内でFindを呼び出し、結果をログに表示

interface Props {
    id: number
    email: string
    name: string
}
const main = async () => {
    try {
        // ユーザーリストを取得
        const users: Props[] = await Find();
        users.forEach(user => {
            console.log(user.email)
        })
        console.log(users)

        // プリズマクライアントを切断
        await prisma.$disconnect();
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    }
};

main();
