import type { ReactNode } from 'react';
import SectionHeader from '@/components/SectionHeader';


export default function Prizes() {
    const openDivisionPrizes = ['$250', '$150', '$100'];
    const studentDivisionPrizes = ['$250', '$150', '$100'];

    return (
        <>
            <SectionHeader id="prizes">
                Prizes
            </SectionHeader>

            <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <PrizeTable division="Open">
                    {openDivisionPrizes.map((p, i) => (
                        <div className="table-row bg-black/20 divide-x divide-secondary" key={i}>
                            <div className="table-cell p-2 border-t border-secondary text-right">{i + 1}.</div>
                            <div className="table-cell px-4 py-2 border-t border-secondary">{p}</div>
                        </div>
                    ))}
                </PrizeTable>

                <PrizeTable division="Student">
                    {studentDivisionPrizes.map((s, i) => (
                        <div className="table-row bg-black/20 divide-x divide-secondary" key={i}>
                            <div className="table-cell p-2 border-t border-secondary text-right">{i + 1}.</div>
                            <div className="table-cell px-4 py-2 border-t border-secondary">{s}</div>
                        </div>
                    ))}
                </PrizeTable>
            </div>

            <p className="text-sm text-primary">
                Prize transfers will be arranged with PayPal or Venmo. Winner must provide a valid email address to receive the prize and Student division teams must perform a verification process to confirm their student status.
            </p>
        </>
    )
}

function PrizeTable(props: { children: ReactNode, division: string }) {
    return (
        <div className="table w-full text-sm border border-secondary">
            <div className="table-header-group">
                <div className="table-row bg-black/40 font-semibold text-primary divide-x divide-secondary">
                    <div className="table-cell p-2 w-12 text-right">#</div>
                    <div className="table-cell px-4 py-2">
                        {props.division} division prizes
                    </div>
                </div>
            </div>

            {props.children}
        </div>
    )
}
