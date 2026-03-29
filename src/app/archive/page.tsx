import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

import { webinarAgendaItems } from '@/components/Agenda'
import { Navbar } from '@/components/Navbar'
import { SPRING_MEETING_ARCHIVE_PATH } from '@/components/SpringMeetingArchivePage'
import { WEBINAR_ARCHIVE_PATH } from '@/components/WebinarArchivePage'
import { springMeetingSchedule } from '@/components/Schedule'
import { toLegacyArchivePublicSlug } from '@/lib/legacyArchiveSlugs'

const SITE_URL = 'https://www.njsug.org'
const ARCHIVE_URL = `${SITE_URL}/archive`

type ArchiveItem = {
  title: ReactNode
  presenter: string
}

type ArchiveSection = {
  date: string
  items: ArchiveItem[]
}

const springMeetingHighlights = springMeetingSchedule.filter((item) => {
  if (item.isBreak) {
    return false
  }

  return [
    "SAS®, SQL, R, and Python: We're All Friends",
    'R Shiny Dev Process and Use Cases',
    'Gen AI in Biometrics: Transforming Clinical trials with Supercharged Efficiency and Innovation',
    'Panel Discussion: Navigating the Future of Statistical Programming: Skills, Tools, and Opportunities',
  ].includes(item.title)
})

const archiveDetailLink = (path: string) => {
  const [file, hash] = path.split('#')
  const publicSlug = toLegacyArchivePublicSlug(file)
  return hash ? `/archive/${publicSlug}#${hash}` : `/archive/${publicSlug}`
}
const archiveLinkClass =
  'font-medium text-emerald-100 underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-white'

const archiveSections: ArchiveSection[] = [
  {
    date: 'November 2013',
    items: [
      {
        title: <Link href={archiveDetailLink('m2013q4.php#p1')} className={archiveLinkClass}>How Mobile Changes the BI Experience</Link>,
        presenter: 'Murali Nori',
      },
      {
        title: <Link href={archiveDetailLink('m2013q4.php#p2')} className={archiveLinkClass}>Whirlwind Tour Around SAS Visual Analytics</Link>,
        presenter: 'article and slide deck with FREE self-study links, Ted Stolarczyk',
      },
    ],
  },
  {
    date: 'May 2012',
    items: [
      {
        title: <Link href={archiveDetailLink('m2012q2.php')} className={archiveLinkClass}>Now You Can Annotate Your SG Procedure Graphs</Link>,
        presenter: 'Dan Heath',
      },
    ],
  },
  {
    date: 'Nov 2011',
    items: [
      {
        title: <Link href={archiveDetailLink('m2011q4.php#p1')} className={archiveLinkClass}>Multi-sheet Workbooks from SAS data using the ODS ExcelXP tagset or Another Way to EXCEL using SAS Downloads</Link>,
        presenter: 'Cynthia Stetz',
      },
      {
        title: <Link href={archiveDetailLink('m2011q4.php#p2')} className={archiveLinkClass}>Predictive Modeling with JMP 9 Pro</Link>,
        presenter: 'Aashish Majethia',
      },
    ],
  },
  {
    date: 'July 2011',
    items: [
      {
        title: <Link href={archiveDetailLink('m2011q2.php#p1')} className={archiveLinkClass}>PROC FORMAT: The Basics and Beyond</Link>,
        presenter: 'Andrew Karp',
      },
      {
        title: <Link href={archiveDetailLink('m2011q2.php#p2')} className={archiveLinkClass}>PROC MEANS: The Basics and Beyond</Link>,
        presenter: 'Andrew Karp',
      },
    ],
  },
  {
    date: 'Mar 2011',
    items: [
      {
        title: <Link href={archiveDetailLink('m2011q1.php#p1')} className={archiveLinkClass}>What Were We Talking about at Those SAS Conferences, or Let&apos;s Make Some Tag Clouds</Link>,
        presenter: 'Chang Y. Chung and John King',
      },
      {
        title: <Link href={archiveDetailLink('m2011q1.php#p2')} className={archiveLinkClass}>It&apos;s All About Variation: Improving Your Business Process with Statistical Thinking</Link>,
        presenter: 'Blair Christian (presenter)',
      },
    ],
  },
  {
    date: 'Dec 2010',
    items: [
      {
        title: <Link href={archiveDetailLink('m2010q4.php#p1')} className={archiveLinkClass}>Interactive and Efficient Macro Programming with Prompts in SAS Enterprise Guide</Link>,
        presenter: 'Kenneth Sucher',
      },
      {
        title: <Link href={archiveDetailLink('m2010q4.php#p2')} className={archiveLinkClass}>Handling XML Documents with SAS</Link>,
        presenter: 'Lex Jansen',
      },
    ],
  },
  {
    date: 'Oct 2010',
    items: [
      {
        title: <Link href={archiveDetailLink('m2010q3.php#p1')} className={archiveLinkClass}>Condensed and Sparse Indexes for Sorted SAS Datasets</Link>,
        presenter: 'Mark Keintz',
      },
      {
        title: <Link href={archiveDetailLink('m2010q3.php#p2')} className={archiveLinkClass}>What&apos;s New with JMP 9</Link>,
        presenter: 'Valerie Hyde',
      },
    ],
  },
  {
    date: 'May 2010',
    items: [
      {
        title: <Link href={archiveDetailLink('m2010q2.php#p1')} className={archiveLinkClass}>Tiptoe Through the Templates</Link>,
        presenter: 'Cynthia Zender',
      },
      {
        title: <Link href={archiveDetailLink('m2010q2.php#p2')} className={archiveLinkClass}>Roundtable Discussion: The &quot;Hottest&quot; SAS Skills</Link>,
        presenter: 'Moderator: Roberto Lopez (NJSUG); Discussants: Matt Aston (Smith Hanley); Gourish Hosangady (Inforeem); Beilei Xu (Merck); Cynthia Zender (SAS)',
      },
    ],
  },
  {
    date: 'March 2010',
    items: [
      {
        title: <Link href={archiveDetailLink('m2010q1.php#p1')} className={archiveLinkClass}>Revolutionary BI: A Vision for Business Intelligence</Link>,
        presenter: 'Charles Kincaid',
      },
      {
        title: <Link href={archiveDetailLink('m2010q1.php#p2')} className={archiveLinkClass}>Using Advanced Features of User-defined Formats and Informats</Link>,
        presenter: 'Ron Cody',
      },
      {
        title: <Link href={archiveDetailLink('m2010q1.php#s1')} className={archiveLinkClass}>Special Training: An Introduction to Data Cleaning</Link>,
        presenter: 'Ron Cody',
      },
    ],
  },
  {
    date: 'December 2009',
    items: [
      {
        title: <Link href={archiveDetailLink('m2009q4.php#p1')} className={archiveLinkClass}>Let Your Data Power Your DATA Step</Link>,
        presenter: 'Howard Schreier',
      },
      {
        title: <Link href={archiveDetailLink('m2009q4.php#p2')} className={archiveLinkClass}>Using PROC RANK and PROC UNIVARIATE to Rank or Decile Variables</Link>,
        presenter: 'Jonas Bilenas',
      },
    ],
  },
  {
    date: 'September 2009',
    items: [
      {
        title: <Link href={archiveDetailLink('m2009q3.php#p1')} className={archiveLinkClass}>Data Visualization Using JMP and SAS</Link>,
        presenter: 'Valerie Hyde',
      },
      {
        title: <Link href={archiveDetailLink('m2009q3.php#p2')} className={archiveLinkClass}>Development on a Dime: Creating Your SAS Programming Environment</Link>,
        presenter: 'Michael Davis',
      },
    ],
  },
  {
    date: 'June 2009',
    items: [
      {
        title: <Link href={archiveDetailLink('m2009q2.html#p1')} className={archiveLinkClass}>Effective Graphics using the SG Procedures</Link>,
        presenter: 'Dan Heath',
      },
      {
        title: <Link href={archiveDetailLink('m2009q2.html#p2')} className={archiveLinkClass}>Secrets of the SG Procedures/ODS Graphics Designer</Link>,
        presenter: 'Dan Heath',
      },
    ],
  },
  {
    date: 'March 2009',
    items: [
      {
        title: <Link href={archiveDetailLink('m2009q1.html#p1')} className={archiveLinkClass}>Interactive Macro Processing with Dynamic Domains</Link>,
        presenter: 'Brian Clawson',
      },
      {
        title: <Link href={archiveDetailLink('m2009q1.html#p2')} className={archiveLinkClass}>Is This Macro Parameter Blank?</Link>,
        presenter: 'Chang Y. Chung and John King',
      },
    ],
  },
  {
    date: 'December 2008',
    items: [
      {
        title: <><Link href={archiveDetailLink('m2008q4.html#p1')} className={archiveLinkClass}>PROC SQL: Tips and Translations</Link> for Data Step Users</>,
        presenter: 'Gail Jorgensen and Susan Marcella',
      },
      {
        title: <><Link href={archiveDetailLink('m2008q4.html#p2')} className={archiveLinkClass}>SAS Enterprise Business Intelligence (EBI)</Link>, the Need, the Pitch, the Implementation</>,
        presenter: 'Mike Occhipinti',
      },
    ],
  },
  {
    date: 'March 2005',
    items: [
      {
        title: <>Take an In-Depth <Link href={archiveDetailLink('meet2005.html')} className={archiveLinkClass}>Look at the %EVAL Function</Link></>,
        presenter: 'Beilei Xu and Lei Zhang',
      },
      {
        title: <>A Guide to <Link href={archiveDetailLink('meet2005.html')} className={archiveLinkClass}>Understanding Web Application Development</Link></>,
        presenter: '(paper by Rob Girardin + Corey Benson), Scott Leslie',
      },
    ],
  },
  {
    date: 'December 2004',
    items: [
      {
        title: <Link href={archiveDetailLink('meet2004.html#g')} className={archiveLinkClass}>SAS 9 and Business Intelligence</Link>,
        presenter: 'Terry Druckman',
      },
      {
        title: <Link href={archiveDetailLink('meet2004.html#h')} className={archiveLinkClass}>%SYSFUNC; a powerful SAS tool</Link>,
        presenter: 'Foster Kerrison',
      },
    ],
  },
  {
    date: 'September 2004',
    items: [
      {
        title: <Link href={archiveDetailLink('meet2004.html#e')} className={archiveLinkClass}>ODS: Step by Step</Link>,
        presenter: 'Wendi Wright',
      },
      {
        title: <><Link href={archiveDetailLink('meet2004.html#f')} className={archiveLinkClass}>PROC SQL - Is It a Required Tool</Link> of Good SAS Programming?</>,
        presenter: 'Dr. Ian Whitlock',
      },
    ],
  },
  {
    date: 'June 2004',
    items: [
      {
        title: <Link href={archiveDetailLink('meet2004.html#c')} className={archiveLinkClass}>Mrs. Clean Tackles Dirty Data</Link>,
        presenter: 'Janet Stuelpner',
      },
      {
        title: <Link href={archiveDetailLink('meet2004.html#d')} className={archiveLinkClass}>The Input Statement: Where It&apos;s @</Link>,
        presenter: 'Ron Cody',
      },
    ],
  },
  {
    date: 'March 2004',
    items: [
      {
        title: <><Link href={archiveDetailLink('meet2004.html#a')} className={archiveLinkClass}>Testing and Validating SAS Programs</Link> OR Beyond Debugging: Program Validation</>,
        presenter: 'Neil Howard',
      },
      {
        title: <Link href={archiveDetailLink('meet2004.html#b')} className={archiveLinkClass}>ODS on SAS V9.1</Link>,
        presenter: 'Sandy McNeil, Eric Gebhart',
      },
    ],
  },
  {
    date: 'December 2003',
    items: [
      {
        title: <Link href={archiveDetailLink('meet2003.html#g')} className={archiveLinkClass}>Using SAS Drug Development as a Report Management Application</Link>,
        presenter: 'Barry R. Cohen',
      },
      {
        title: <>Not quite <Link href={archiveDetailLink('meet2003.html#h')} className={archiveLinkClass}>PROC AUTOBUCKET</Link></>,
        presenter: 'Bob Bertolatus',
      },
    ],
  },
  {
    date: 'October 2003',
    items: [
      {
        title: <>LAG with a WHERE and other DATA Step Stories</>,
        presenter: 'Neil Howard',
      },
      {
        title: <>ETL Studio on V9.1</>,
        presenter: 'Gary Mehler',
      },
    ],
  },
  {
    date: 'June 2003',
    items: [
      {
        title: <Link href={archiveDetailLink('meet2003.html#e')} className={archiveLinkClass}>Introduction to Mapping with SAS/GRAPH</Link>,
        presenter: 'Mike Zdeb',
      },
      {
        title: <Link href={archiveDetailLink('meet2003.html#f')} className={archiveLinkClass}>SyncSort - Making SAS applications run faster</Link>,
        presenter: 'Suzanne Malzacher',
      },
    ],
  },
  {
    date: 'March 2003',
    items: [
      {
        title: <><Link href={archiveDetailLink('meet2003.html#a')} className={archiveLinkClass}>Data about Data</Link>: An Introduction to Dictionary Tables</>,
        presenter: 'Frank DiIorio',
      },
      {
        title: <Link href={archiveDetailLink('meet2003.html#b')} className={archiveLinkClass}>Summarization with Proc Means</Link>,
        presenter: 'Ron Cody',
      },
      {
        title: <Link href={archiveDetailLink('meet2003.html#c')} className={archiveLinkClass}>SAS Drug Development</Link>,
        presenter: 'Terry Druckman',
      },
    ],
  },
  {
    date: 'December 2002',
    items: [
      {
        title: <><Link href={archiveDetailLink('meet2002.html#g')} className={archiveLinkClass}>ODS Output</Link> - A Discussion of Some Examples</>,
        presenter: 'Cynthia Stetz',
      },
      {
        title: <Link href={archiveDetailLink('meet2002.html#h')} className={archiveLinkClass}>SAS Version 9 Features</Link>,
        presenter: 'Terry Druckman',
      },
    ],
  },
  {
    date: 'October 2002',
    items: [
      {
        title: <Link href={archiveDetailLink('meet2002.html#e')} className={archiveLinkClass}>To Web or not to Web</Link>,
        presenter: 'David Ward',
      },
      {
        title: <Link href={archiveDetailLink('meet2002.html#f')} className={archiveLinkClass}>PROC TABULATE: Doin&apos; it in STYLE!</Link>,
        presenter: 'Ray Pass & Sandy McNeill',
      },
    ],
  },
  {
    date: 'June 2002',
    items: [
      {
        title: <><Link href={archiveDetailLink('meet2002.html#c')} className={archiveLinkClass}>Choice of Development Tool for the User Interface</Link> of a Client-Server Application . . .</>,
        presenter: 'Barry R. Cohen',
      },
      {
        title: <>SAS and <Link href={archiveDetailLink('meet2002.html#d')} className={archiveLinkClass}>ODS / Publishing to a Web Site - IBM / OS390</Link> Implementation</>,
        presenter: 'Sanja Batljan',
      },
    ],
  },
  {
    date: 'March 2002',
    items: [
      {
        title: <Link href={archiveDetailLink('meet2002.html')} className={archiveLinkClass}>You Could Look It Up: An Introduction to SASHELP Dictionary Views</Link>,
        presenter: 'Michael Davis',
      },
    ],
  },
  {
    date: 'December 2001',
    items: [
      {
        title: <Link href={archiveDetailLink('meet2001.html#g')} className={archiveLinkClass}>Intro to the Macro Map</Link>,
        presenter: 'Russ Lavery, Saad Anbari, Musa Nsereko',
      },
      {
        title: <Link href={archiveDetailLink('meet2001.html#h')} className={archiveLinkClass}>The Macro Reference Environment</Link>,
        presenter: 'Russ Lavery, Saad Anbari, Musa Nsereko',
      },
    ],
  },
  {
    date: 'September 2001',
    items: [
      {
        title: <Link href={archiveDetailLink('meet2001.html#e')} className={archiveLinkClass}>Covariant Method for Analysis of Stability Data</Link>,
        presenter: 'Clayton Rasmussen',
      },
      {
        title: <Link href={archiveDetailLink('meet2001.html#f')} className={archiveLinkClass}>An Application of PROC NLP to Survey Sample Weighting</Link>,
        presenter: 'Talbot Katz',
      },
    ],
  },
  {
    date: 'June 2001',
    items: [
      {
        title: <><Link href={archiveDetailLink('meet2001.html#c')} className={archiveLinkClass}>Creating and Using Summary Data Sets</Link> - Additions In SAS V8</>,
        presenter: 'Ron Cody',
      },
      {
        title: <Link href={archiveDetailLink('meet2001.html#d')} className={archiveLinkClass}>SAS Version 8.2 enhancements</Link>,
        presenter: 'Scott Vodicka',
      },
    ],
  },
  {
    date: 'March 2001',
    items: [
      {
        title: <Link href={archiveDetailLink('meet2001.html')} className={archiveLinkClass}>You can do THAT with SAS Software? Using the socket access method . . .</Link>,
        presenter: 'David Ward',
      },
      {
        title: <Link href={archiveDetailLink('meet2001.html#b')} className={archiveLinkClass}>Analyzing the stock market using SAS software</Link>,
        presenter: 'Jim Arvesen',
      },
    ],
  },
  {
    date: 'October 2000',
    items: [
      {
        title: <Link href={archiveDetailLink('meet2000.html#e')} className={archiveLinkClass}>On visualizing Direct and Partial Correlations</Link>,
        presenter: 'Leonardo E. Auslender',
      },
      {
        title: <><Link href={archiveDetailLink('meet2000.html#f')} className={archiveLinkClass}>Data Warehousing and MDDB processing</Link> using the SAS system</>,
        presenter: 'George Bukhbinder',
      },
    ],
  },
  {
    date: 'April 2000',
    items: [
      {
        title: <Link href={archiveDetailLink('meet2000.html#c')} className={archiveLinkClass}>SAS Certified Professional Program</Link>,
        presenter: 'Roger Staum',
      },
      {
        title: <Link href={archiveDetailLink('meet2000.html#d')} className={archiveLinkClass}>Overview of AppDev Studio</Link>,
        presenter: 'Carl LaChapelle',
      },
    ],
  },
  {
    date: 'March 2000',
    items: [
      {
        title: <Link href={archiveDetailLink('meet2000.html')} className={archiveLinkClass}>Web Publishing Using SAS Software</Link>,
        presenter: 'Chris Bresson',
      },
      {
        title: <Link href={archiveDetailLink('meet2000.html#b')} className={archiveLinkClass}>SAS Career Development in the Pharmaceutical Industry</Link>,
        presenter: 'Jean Kim and Lloyd Turner',
      },
    ],
  },
  {
    date: 'September 1999',
    items: [
      {
        title: <Link href={archiveDetailLink('meet1999.html#e')} className={archiveLinkClass}>Longitudinal Data Techniques: Looking Across Observations</Link>,
        presenter: 'Ronald P. Cody',
      },
      {
        title: <Link href={archiveDetailLink('meet1999.html#f')} className={archiveLinkClass}>Discontented with PROC CONTENTS? Expand it with FMTLIB</Link>,
        presenter: 'Irene Mendelson',
      },
    ],
  },
  {
    date: 'June 1999',
    items: [
      {
        title: <Link href={archiveDetailLink('meet1999.html#c')} className={archiveLinkClass}>The New FDA Industry Guidelines for Electronic Regulatory Submissions</Link>,
        presenter: 'Rich Vachal',
      },
      {
        title: <><Link href={archiveDetailLink('meet1999.html#d')} className={archiveLinkClass}>PROC LP for Dummies</Link> -or- How to decide which NFL games to attend</>,
        presenter: 'Bob Bertolatus',
      },
    ],
  },
  {
    date: 'March 1999',
    items: [
      {
        title: <Link href={archiveDetailLink('meet1999.html')} className={archiveLinkClass}>Additions to the SAS System including ODS</Link>,
        presenter: 'Paul Kent, SAS Institute, Cary, NC',
      },
      {
        title: <Link href={archiveDetailLink('meet1999.html#b')} className={archiveLinkClass}>What Your Mother Never Told You About the Query Window</Link>,
        presenter: 'Janet E. Stuelpner, ASG, Inc., Cary, NC',
      },
    ],
  },
  {
    date: 'December 1998',
    items: [
      {
        title: <>Getting Started with PROC LOGISTIC and Indexing and Compressing SAS Data Sets . . .</>,
        presenter: 'Andrew Karp',
      },
    ],
  },
  {
    date: 'September 1998',
    items: [
      {
        title: <><Link href={archiveDetailLink('meet1998.html#e')} className={archiveLinkClass}>DATA Step in Version 7</Link>: What&apos;s New?</>,
        presenter: 'William F. Heffner',
      },
      {
        title: <Link href={archiveDetailLink('meet1998.html#f')} className={archiveLinkClass}>Statistical Graphics</Link>,
        presenter: 'Susan Fehrer and Stanley Willsky',
      },
    ],
  },
  {
    date: 'May 1998',
    items: [
      {
        title: <><Link href={archiveDetailLink('meet1998.html#c')} className={archiveLinkClass}>Introduction to HTML</Link> - No Magic Involved</>,
        presenter: 'Bob Bertolatus',
      },
      {
        title: <Link href={archiveDetailLink('meet1998.html#d')} className={archiveLinkClass}>Web Enabling Your SAS Application</Link>,
        presenter: 'James Sun',
      },
    ],
  },
  {
    date: 'February 1998',
    items: [
      {
        title: <><Link href={archiveDetailLink('meet1998.html#a')} className={archiveLinkClass}>SCL for the Rest of Us</Link>: Non-Visual Uses of Screen Control Language</>,
        presenter: 'Michael Davis',
      },
      {
        title: <Link href={archiveDetailLink('meet1998.html#b')} className={archiveLinkClass}>Harnessing the Power of SCL Lists</Link>,
        presenter: 'Lisa Horwitz',
      },
    ],
  },
]

export const metadata: Metadata = {
  title: 'Presentation Archive',
  description:
    'Browse the NJSUG archive of past presentations, including the NJSUG 2025 Webinar, the NJSUG 2025 Spring Meeting, and legacy meetings from 1998 through 2013.',
  alternates: {
    canonical: ARCHIVE_URL,
  },
  openGraph: {
    title: 'NJSUG Presentation Archive',
    description:
      'Browse the NJSUG archive of past presentations, including the NJSUG 2025 Webinar, the NJSUG 2025 Spring Meeting, and legacy meetings from 1998 through 2013.',
    url: ARCHIVE_URL,
    type: 'website',
    siteName: 'NJSUG - New Jersey Statistical Users Group',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'NJSUG Presentation Archive',
    description:
      'Browse the NJSUG archive of past presentations, including the NJSUG 2025 Webinar, the NJSUG 2025 Spring Meeting, and legacy meetings from 1998 through 2013.',
  },
}

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-[#007A73] text-white">
      <Navbar />

      <section className="container mx-auto px-4 pb-16 pt-8 md:pt-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-100/80">
              Archive
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Archive of Past Presentations
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-emerald-50/90 md:text-lg">
              This page brings together archived NJSUG event content in the current
              njsug.org layout. Recent event pages stay on njsug.org, while legacy
              meeting details and some historical downloads still use preserved archived
              assets where needed.
            </p>
          </div>

          <section className="mt-8 rounded-[2rem] border border-white/15 bg-white/8 p-6 shadow-lg shadow-black/10 backdrop-blur-sm md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/70">
                  Recent Event Archive
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  NJSUG 2025 Webinar
                </h2>
                <p className="mt-3 text-base leading-7 text-emerald-50/85">
                  The former home page has been preserved as an archive page for
                  our November 21, 2025 webinar on automation, including the full
                  event overview, agenda, organizing team, and photos.
                </p>
                <Link
                  href={WEBINAR_ARCHIVE_PATH}
                  className="mt-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  Open Event Page
                </Link>
              </div>

              <div className="min-w-0 flex-1 rounded-3xl border border-white/10 bg-black/10 p-5">
                <h3 className="text-lg font-semibold text-white">Agenda Highlights</h3>
                <ul className="mt-4 space-y-3">
                  {webinarAgendaItems.map((item) => (
                    <li
                      key={item.topic}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <p className="text-sm font-medium leading-6 text-white/95">
                        {item.topic}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-emerald-100/80">
                        {item.presenters}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>


          <section className="mt-8 rounded-[2rem] border border-white/15 bg-white/8 p-6 shadow-lg shadow-black/10 backdrop-blur-sm md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/70">
                  Recent Event Archive
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  NJSUG 2025 Spring Meeting
                </h2>
                <p className="mt-3 text-base leading-7 text-emerald-50/85">
                  Explore the full event page for our May 13, 2025 Spring Meeting, now
                  organized as part of the archive. This includes three presentations
                  and one panel discussion.
                </p>
                <Link
                  href={SPRING_MEETING_ARCHIVE_PATH}
                  className="mt-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  Open Event Page
                </Link>

                <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/10 shadow-lg shadow-black/10">
                  <Image
                    src="/images/event-photos/Group_1.jpg"
                    alt="NJSUG 2025 Spring Meeting group photo"
                    width={1200}
                    height={800}
                    className="h-64 w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1 rounded-3xl border border-white/10 bg-black/10 p-5">
                <h3 className="text-lg font-semibold text-white">Program Highlights</h3>
                <ul className="mt-4 space-y-3">
                  {springMeetingHighlights.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <p className="text-sm font-medium leading-6 text-white/95">
                        {item.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {archiveSections.map((section) => (
              <section
                key={section.date}
                className="rounded-3xl border border-white/15 bg-white/8 p-6 shadow-lg shadow-black/10 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-semibold text-white">{section.date}</h2>
                <ul className="mt-4 space-y-4">
                  {section.items.map((item, index) => (
                    <li
                      key={`${section.date}-${index}`}
                      className="rounded-2xl border border-white/10 bg-black/10 p-4"
                    >
                      <p className="text-base leading-7 text-white/95">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-emerald-100/80">
                        {item.presenter}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}



