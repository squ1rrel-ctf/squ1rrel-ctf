'use client'

import { useContext } from 'react';

export default function Footer() {
    return (
        <footer className="mx-4 mt-auto text-center pb-8 sm:pb-12 text-primary text-sm hover:text-white transition duration-200">
            <p>
                <a href="https://github.com/squ1rrel-ctf/squ1rrel-ctf" target="_blank" rel="noopener noreferrer" className="underline">squ1rrel CTF platform</a> -
                Backend powered by <a href="https://rctf.redpwn.net/" target="_blank" rel="noopener noreferrer" className="underline">rCTF</a> -
                Fork of frontend <a href="https://github.com/ky28059/bctf" target="_blank" rel="noopener noreferrer" className="underline">b01lers CTF platform</a>
            </p>
        </footer>
    )
}
