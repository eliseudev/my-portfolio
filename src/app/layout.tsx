import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_Mono } from 'next/font/google';
import Footer from '@/components/Footer';

const notoSansMono = Noto_Sans_Mono({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '700', '800'] });

export const metadata: Metadata = {
	title: 'Eliseu Oliveira | Desenvolvedor de Software',
	description: "Eliseu Oliveira",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={`${notoSansMono.className} min-w-[380px] bg-slate-900`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
