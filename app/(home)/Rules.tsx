import SectionHeader from '@/components/SectionHeader';


export default function Rules() {
    return (
        <>
            <SectionHeader id="rules">
                Rules
            </SectionHeader>
            <ol className="list-decimal list-outside pl-6 space-y-2 mb-16">
                <li>
                    No flag sharing or hint sharing with members of other teams. Challenge guidance should be provided only through ticket channels and no posting flags in public channels
                </li>
                <li>
                    No online challenge bruteforce or attacking squ1rrel.dev/Vanderbilt University infrastructure
                </li>
                <li>
                    Student division teams must be composed of current US-based university or high school students to be eligible for prizes.
                </li>
                <li>
                    Open division teams may be of any size and composition.
                </li>
                <li>
                    Join the discord server at <a href="https://discord.gg/ejfNarcz" target="_blank" rel="noopener noreferrer" className="text-theme-bright hover:underline">https://discord.gg/ejfNarcz</a> and contact admins by creating a ticket in #open-ticket
                </li>
                <li>
                    All teams must provide a valid email address to be eligible for prizes
                </li>
                <li>
                    Flag format is {"squ1rrel{}"} unless otherwise specified
                </li>
            </ol>
        </>
    )
}
