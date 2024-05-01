import Timer from '@/app/(home)/Timer';
import { BsChevronCompactDown } from 'react-icons/bs';
import { getConfig } from '@/util/config';


export default async function Header() {
    const config = await getConfig();

    return (
        <header className="container flex flex-col items-center justify-center h-screen">
            <img src="/assets/squ1rrel_logo.webp" />
            <Timer
                startTime={config.data.startTime}
                endTime={config.data.endTime}
            />
            <p className="mb-2 max-w-3xl text-center text-pretty">
                squ1rrel CTF is a jeopardy-style CTF hosted by the squ1rrel CTF team at Vanderbilt University<br></br>
                Join our discord at <a href="https://discord.gg/ejfNarcz" target="_blank" rel="noopener noreferrer" className="text-theme-bright hover:underline">https://discord.gg/ejfNarcz</a>{' '}
                and register your team to get started!
            </p>
            <div className="flex divide-x divide-primary text-sm">
                <a href="#rules" className="px-4 py-2 uppercase hover:underline">Rules</a>
                <a href="#prizes" className="px-4 py-2 uppercase hover:underline">Prizes</a>
                <a href="#sponsors" className="px-4 py-2 uppercase hover:underline">Sponsors</a>
            </div>

            <a href="#rules" className="text-inherit text-4xl mt-12 sm:mb-16 text-primary">
                <BsChevronCompactDown className="animate-bounce" />
                <span className="sr-only">Jump to Rules</span>
            </a>
        </header>
    )
}
