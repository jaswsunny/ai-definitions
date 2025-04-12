// Timeline data structure
const timelineData = [
    {
        year: 1947,
        author: "Alan Turing",
        term: "Automatic Computing Engine",
        quote: "A good working rule is that the <strong>ACE</strong> can be made to do any job that could be done by a human computer, and will do it in one ten-thousandth of the time. I was researching on what might now be described as an [3] investigation of the theoretical possibilities and limitations of digital computing machines. I considered a type of machine which had a central mechanism, and an infinite memory which was contained on an infinite tape. This type of machine appeared to be sufficiently general.",
        source: {
            text: '"Lecture to the London Mathematical Society" from the Collected Works of Alan M. Turing, Volume 1: Mechanical Intelligence',
            link: null
        },
        context: "First known concept of a machine intelligent enough to complete human-like tasks, learn from experience, etc. Also discusses automation, training, alignment, hallucination.",
        tags: ["processes", "performance"]
    },
    {
        year: 1955,
        author: "John McCarthy, Marvin Minsky, Nathaniel Rochester, Claude Shannon",
        term: "artificial intelligence",
        quote: "We propose that a 2 month, 10 man study of <strong>artificial intelligence</strong> be carried out during the summer of 1956 at Dartmouth College in Hanover, New Hampshire. The study is to proceed on the basis of the conjecture that every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it. An attempt will be made to find how to make machines use language, form abstractions and concepts, solve kinds of problems now reserved for humans, and improve themselves.",
        source: {
            text: "Proposal for the Dartmouth Summer Research Project on AI",
            link: "http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf"
        },
        context: "First published usage of \"artificial intelligence\" / invention of the field",
        tags: ["processes", "performance"]
    },
    {
        year: 1980,
        author: "John Searle",
        term: "strong AI",
        quote: "According to <strong>strong AI</strong>, the computer is not merely a tool in the study of the mind; rather, the appropriately programmed computer really is a mind, in the sense that computers given the right programs can be literally said to understand and have other cognitive states.",
        source: {
            text: "Minds, brains, and programs",
            link: "https://home.csulb.edu/~cwallis/382/readings/482/searle.minds.brains.programs.bbs.1980.pdf"
        },
        context: "Searle's \"Strong AI\" hypothesis, which he refutes, suggests that a computer program simulating a mind is also conscious and has its own mental states. (This is not how most AI researchers or theorists would define AI.) (Searle is the \"Chinese room\" guy)",
        tags: ["processes"]
    },
    {
        year: 1997,
        author: "Mark Avrum Gubrud",
        term: "advanced artificial general intelligence",
        quote: "By <strong>advanced artificial general intelligence</strong>, I mean AI systems that rival or surpass the human brain in complexity and speed, that can acquire, manipulate and reason with general knowledge, and that are usable in essentially any phase of ... operations where a human intelligence would otherwise be needed.",
        source: {
            text: "Nanotechnology and National Security",
            link: "https://web.archive.org/web/20100612234609/https://foresight.org/Conferences/MNT05/Papers/Gubrud/index.html"
        },
        context: "First recorded usage of AGI but went unnoticed by AI community",
        tags: ["generality", "performance"]
    },
    {
        year: 2002,
        author: "Ben Goertzel & Shane Legg",
        term: "AGI",
        quote: "What is meant by <strong>AGI</strong> is, loosely speaking, AI systems that possess a reasonable degree of self-understanding and autonomous self-control, and have the ability to solve a variety of complex problems in a variety of contexts, and to learn to solve new problems that they didn't know about at the time of their creation. A marked distinction exists between practical AGI work and, on the other hand:<br><br>• Pragmatic but specialized \"narrow AI\" research which is aimed at creating programs carrying out specific tasks like playing chess, diagnosing diseases, driving cars and so forth (most contemporary AI work falls into this category.)<br>• Purely theoretical AI research, which is aimed at clarifying issues regarding the nature of intelligence and cognition, but doesn't involve technical details regarding actually realizing artificially intelligent software.",        
        source: {
            text: "Goertzel's book (pub. 2005) needed a title. He didn't like \"strong AI,\" and Shane came up with \"AGI.\"",
            link: "https://goertzel.org/who-coined-the-term-agi"
        },
        context: "Goertzel and Legg are credited with popular diffusion of the term AGI.",
        tags: ["processes", "generality", "performance"]
    },
    {
        year: 2005,
        author: "Ray Kurzweil",
        term: "strong AI",
        quote: "Artificial intelligence permeates our economy. It's what I define as \"narrow\" AI: machine intelligence that equals or exceeds human intelligence for specific tasks… So what are the prospects for <strong>\"strong\" AI</strong>, which I describe as machine intelligence with the full range of human intelligence?",
        source: {
            text: "Long Live AI / The Singularity Is Near",
            link: "https://www.forbes.com/forbes/2005/0815/030.html"
        },
        context: null,
        tags: ["generality"]
    },
    {
        year: 2005,
        author: "Nils Nilsson",
        term: "human-level intelligence",
        quote: "Machines exhibiting true <strong>human-level intelligence</strong> should be able to do many of the things humans are able to do. Among these activities are the tasks or \"jobs\" at which people are employed. I suggest we replace the Turing test by something I will call the \"employment test.\" To pass the employment test, AI programs must be able to perform the jobs ordinarily performed by humans. Progress toward human-level AI could then be measured by the fraction of these jobs that can be acceptably performed by machines. Rather than work toward this goal of automation by building special-purpose systems, I argue for the development of general-purpose, educable systems that can learn and be taught to perform any of the thousands of jobs that humans can perform.",
        source: {
            text: "Human-Level Artificial Intelligence? Be Serious!",
            link: "https://ai.stanford.edu/~nilsson/OnlinePubs-Nils/General%20Essays/AIMag26-04-HLAI.pdf"
        },
        context: "Nilsson says \"general-purpose, educable\" systems are the right approach to achieve HLMI. Proposes an \"employment test\" to measure AI capabilities",
        tags: ["performance", "impacts"]
    },
    {
        year: 2007,
        author: "Shane Legg & Mark Hutter",
        term: "universal intelligence",
        quote: `"<strong>Intelligence</strong> measures an agent's ability to achieve goals in a wide range of environments." <br><br>The <strong>universal intelligence</strong> of agent π:`,
        image: {
            url: "images/legg_hutter_formula.png",
            alt: "Universal intelligence formula: Upsilon(pi) := sum over mu in E of 2^(-K(mu))V_mu^pi",
            position: "afterQuote"
        },
        source: {
            text: "First formal definition of \"universal intelligence\"",
            link: "https://arxiv.org/pdf/0712.3329"
        },
        context: null,
        tags: ["performance"]
    },
    {
        year: 2011,
        author: "Nick Bostrom & Eliezer Yudkowsky",
        term: "AGI",
        quote: "<strong>\"Artificial General Intelligence\"</strong> (hereafter, AGI) is the emerging term of art used to denote \"real\" AI (see, e.g., the edited volume Goertzel and Pennachin 2006). As the name implies, the emerging consensus is that the missing characteristic is generality. Current AI algorithms with human‐equivalent or ‐superior performance are characterized by a deliberately‐programmed competence only in a single, restricted domain… It is a qualitatively different class of problem to handle an AGI operating across many novel contexts that cannot be predicted in advance.",
        source: {
            text: "The Ethics of Artificial Intelligence",
            link: "https://nickbostrom.com/ethics/artificial-intelligence.pdf"
        },
        context: null,
        tags: ["generality", "performance"]
    },
    {
        year: 2014,
        author: "Vincent C. Müller & Nick Bostrom",
        term: "high-level machine intelligence (HLMI)",
        quote: "Define a <strong>'high–level machine intelligence' (HLMI)</strong> as one that can carry out most human professions at least as well as a typical human. We need to avoid using terms that are already in circulation and would thus associate the questionnaire with certain groups or opinions, like \"artificial intelligence\", \"singularity\", \"artificial general intelligence\" or \"cognitive system\". For these reasons, we settled for a definition that a) is based on behavioral ability, b) avoids the notion of a general 'human–level' and c) uses a newly coined term.",
        source: {
            text: "Future Progress in Artificial Intelligence: A Survey of Expert Opinion",
            link: "https://nickbostrom.com/papers/survey.pdf"
        },
        context: "2014 survey of AI expert opinion — HLMI is used to be debiasing",
        tags: ["performance"]
    },
    {
        year: 2014,
        author: "Nick Bostrom",
        term: "superintelligence",
        quote: "<strong>Superintelligence</strong> is defined as \"any intellect that greatly exceeds the cognitive performance of humans in virtually all domains of interest.\"",
        source: {
            text: "From Superintelligence book",
            link: null
        },
        context: null,
        tags: ["performance", "impacts"]
    },
    {
        year: 2016,
        author: "Holden Karnofsky (OpenPhil)",
        term: "transformative AI",
        quote: "Roughly and conceptually, <strong>transformative AI</strong> refers to potential future AI that precipitates a transition comparable to (or more significant than) the agricultural or industrial revolution. I also provide (below) a more detailed definition. The concept of \"transformative AI\" has some overlap with concepts put forth by others, such as \"superintelligence\" and \"artificial general intelligence.\" However, \"transformative AI\" is intended to be a more inclusive term, leaving open the possibility of AI systems that count as \"transformative\" despite lacking many abilities humans have.",
        source: {
            text: "Some Background on Our Views Regarding Advanced Artificial Intelligence | Open Philanthropy",
            link: "https://www.openphilanthropy.org/research/some-background-on-our-views-regarding-advanced-artificial-intelligence/"
        },
        context: null,
        tags: ["impacts"]
    },
    {
        year: 2016,
        author: "Katja Grace et al. (FHI)",
        term: "high-level machine intelligence",
        quote: "<strong>\"High-level machine intelligence\"</strong> (HLMI) is achieved when unaided machines can accomplish every task better and more cheaply than human workers.",
        source: {
            text: "Regular survey of AI experts on views on AGI, first in 2016",
            link: "https://arxiv.org/abs/1705.08807"
        },
        context: null,
        tags: ["performance", "impacts"]
    },
    {
        year: 2018,
        author: "OpenAI",
        term: "AGI",
        quote: "OpenAI's mission is to ensure that <strong>artificial general intelligence (AGI)</strong> — by which we mean highly autonomous systems that outperform humans at most economically valuable work — benefits all of humanity.",
        source: {
            text: "Defined in the OpenAI charter",
            link: "https://web.archive.org/web/20180409161852/https://blog.openai.com/openai-charter/"
        },
        context: null,
        tags: ["performance", "impacts"]
    },
    {
        year: 2019,
        author: "Francois Chollet",
        term: "general intelligence",
        quote: "The <strong>intelligence</strong> of a system is a measure of its skill-acquisition efficiency over a scope of tasks, with respect to priors, experience, and generalization difficulty. <strong>\"General intelligence\"</strong> is not a binary property which a system either possesses or lacks. It is a spectrum, tied to 1) a scope of application, which may be more or less broad, and 2) the degree of efficiency with which the system translate its priors and experience into new skills over the scope considered, 3) the degree of generalization difficulty represented by different points in the scope considered. It is conceptually unsound to set \"artificial general intelligence\" in an absolute sense (i.e. \"universal intelligence\") as a goal. The consensus definition of AGI, \"a system that can automate the majority of economically valuable work,\" while a useful goal, is an incorrect measure of intelligence.",
        source: {
            text: "On the Measure of Intelligence / What is ARC-AGI?",
            link: "https://arxiv.org/pdf/1911.01547"
        },
        context: "Chollet has been a critic of other definitions of AGI, arguing that they measure memorization rather than generality / new-skill acquisition",
        tags: ["generality"]
    },
    {
        year: 2022,
        author: "Yann LeCun (Meta)",
        term: "human-level AI",
        quote: "I think the phrase AGI should be retired and replaced by \"<strong>human-level AI</strong>\". There is no such thing as <strong>AGI</strong>. Even human intelligence is very specialized. We do not realize that human intelligence is specialized because all the intelligent tasks we can think of are task that we can apprehend. But that is a tiny subset of all tasks. The overwhelming majority of tasks are completely out of reach of un-augmented human intelligence.",
        source: {
            text: "LinkedIn post",
            link: "https://www.linkedin.com/posts/yann-lecun_i-think-the-phrase-agi-should-be-retired-activity-6889610518529613824-gl2F"
        },
        context: null,
        tags: ["performance"]
    },
    {
        year: 2023,
        author: "Sebastien Bubeck et al (Microsoft)",
        term: "AGI",
        quote: "We use <strong>AGI</strong> to refer to systems that demonstrate broad capabilities of intelligence, including reasoning, planning, and the ability to learn from experience, and with these capabilities at or above human-level.",
        source: {
            text: "Sparks of AGI paper",
            link: "https://arxiv.org/abs/2303.12712"
        },
        context: null,
        tags: ["processes", "performance"]
    },
    {
        year: 2024,
        author: "Meredith Morris et al (DeepMind)",
        term: "Levels of AGI",
        quote: "<strong>Artificial General Intelligence (AGI)</strong> is an important and sometimes controversial concept in computing research, used to describe an AI system that is at least as capable as a human at most tasks.",
        image: {
            url: "images/deepmind_agi_levels.png",
            alt: "DeepMind's AGI levels table showing progression from No AI through Emerging, Competent, Expert, Virtuoso to Superhuman levels, across Narrow and General capabilities",
            position: "afterQuote"
        },
        source: {
            text: "Levels of AGI for Operationalizing Progress on the Path to AGI",
            link: "https://arxiv.org/pdf/2311.02462"
        },
        context: "Emphasizes generality and performance—both exceeding human performance on tasks, and adapting to new tasks via learning",
        tags: ["generality", "performance"]
    },
    {
        year: 2024,
        author: "OpenAI",
        term: "Stages of AGI",
        quote: "OpenAI has internally defined five \"stages\" of AGI",
        image: {
            url: "images/openai_agi_levels.png",
            alt: "OpenAI's five levels of AGI: Level 1 (Chatbots), Level 2 (Reasoners), Level 3 (Agents), Level 4 (Innovators), Level 5 (Organizations)",
            position: "afterQuote"
        },
        source: {
            text: "Bloomberg: OpenAI Sets Levels to Track Progress Toward Superintelligent AI",
            link: "https://www.bloomberg.com/news/articles/2024-07-11/openai-sets-levels-to-track-progress-toward-superintelligent-ai"
        },
        context: "(In a 2023 blog post, Sam Altman similarly distinguishes between \"initial AGI\" and \"successor systems\")",
        tags: ["performance", "impacts"]
    },
    {
        year: 2024,
        author: "Dario Amodei (Anthropic)",
        term: "powerful AI",
        quote: "I find AGI to be an imprecise term that has gathered a lot of sci-fi baggage and hype. I prefer \"<strong>powerful AI</strong>\" or \"<strong>Expert-Level Science and Engineering</strong>\"which get at what I mean without the hype. By powerful AI, I have in mind an AI model—likely similar to today's LLM's in form, though it might be based on a different architecture, might involve several interacting models, and might be trained differently—with the following properties:\n\n• In terms of pure intelligence, it is smarter than a Nobel Prize winner across most relevant fields – biology, programming, math, engineering, writing, etc. This means it can prove unsolved mathematical theorems, write extremely good novels, write difficult codebases from scratch, etc.\n\n• In addition to just being a \"smart thing you talk to\", it has all the \"interfaces\" available to a human working virtually, including text, audio, video, mouse and keyboard control, and internet access.\n\n• It can engage in any actions, communications, or remote operations enabled by this interface, including taking actions on the internet, taking or giving directions to humans, ordering materials, directing experiments, watching videos, making videos, and so on.\n\n• It does all of these tasks with, again, a skill exceeding that of the most capable humans in the world.\n\n• It does not just passively answer questions; instead, it can be given tasks that take hours, days, or weeks to complete, and then goes off and does those tasks autonomously, in the way a smart employee would, asking for clarification as necessary.\n\n• It does not have a physical embodiment (other than living on a computer screen), but it can control existing physical tools, robots, or laboratory equipment through a computer; in theory it could even design robots or equipment for itself to use.\n\n• The resources used to train the model can be repurposed to run millions of instances of it (this matches projected cluster sizes by ~2027), and the model can absorb information and generate actions at roughly 10x-100x human speed. It may however be limited by the response time of the physical world or of software it interacts with.\n\n• Each of these million copies can act independently on unrelated tasks, or if needed can all work together in the same way humans would collaborate, perhaps with different subpopulations fine-tuned to be especially good at particular tasks.\n\nWe could summarize this as a \"country of geniuses in a datacenter.\"",
        source: {
            text: "Machines of Loving Grace",
            link: "https://darioamodei.com/machines-of-loving-grace"
        },
        context: null,
        tags: ["performance"]
    },
    {
        year: 2025,
        author: "Sam Altman (OpenAI)",
        term: "AGI",
        quote: "Systems that start to point to <strong>AGI</strong>* are coming into view, and so we think it's important to understand the moment we are in. AGI is a weakly defined term, but generally speaking we mean it to be a system that can tackle increasingly complex problems, at human level, in many fields.",
        source: {
            text: "Three Observations",
            link: "https://blog.samaltman.com/three-observations"
        },
        context: "Sam blog post is notably different from the OpenAI site definition, \"highly autonomous systems that outperform humans at most economically valuable work\" \"At human level\" and \"Many fields\" also seem quite vague!",
        tags: ["performance"]
    }
];

// Function to create a timeline entry HTML
function createTimelineEntry(entry) {
    const entryElement = document.createElement('div');
    entryElement.className = 'timeline-entry';

    const contentElement = document.createElement('div');
    contentElement.className = 'entry-content';

    const headerElement = document.createElement('div');
    headerElement.className = 'entry-header';

    const yearElement = document.createElement('div');
    yearElement.className = 'entry-year';
    yearElement.textContent = entry.year;

    const authorElement = document.createElement('div');
    authorElement.className = 'entry-author';
    authorElement.textContent = entry.author;

    const termElement = document.createElement('div');
    termElement.className = 'entry-term';
    if (entry.source && entry.source.link) {
        const termLink = document.createElement('a');
        termLink.href = entry.source.link;
        termLink.textContent = entry.term;
        termElement.appendChild(termLink);
    } else {
        termElement.textContent = entry.term;
    }

    headerElement.appendChild(yearElement);
    headerElement.appendChild(authorElement);
    headerElement.appendChild(termElement);

    const detailsElement = document.createElement('div');
    detailsElement.className = 'entry-details';

    if (entry.quote || entry.image || entry.additionalText) {
        const quoteElement = document.createElement('div');
        quoteElement.className = 'entry-quote';
        
        if (entry.quote) {
            const quoteText = document.createElement('div');
            entry.quote.split('\n').forEach(line => {
                if (line.trim()) {
                    const p = document.createElement('p');
                    p.innerHTML = line;
                    quoteText.appendChild(p);
                }
            });
            quoteElement.appendChild(quoteText);
        }

        if (entry.image && entry.image.position === "afterQuote") {
            const imageElement = document.createElement('div');
            imageElement.className = 'entry-image';
            const img = document.createElement('img');
            img.src = entry.image.url;
            img.alt = entry.image.alt;
            img.style.maxWidth = '100%';
            img.style.margin = '1em 0';
            imageElement.appendChild(img);
            quoteElement.appendChild(imageElement);
        }

        if (entry.additionalText) {
            const additionalTextElement = document.createElement('div');
            entry.additionalText.split('\n').forEach(line => {
                if (line.trim()) {
                    const p = document.createElement('p');
                    p.innerHTML = line;
                    additionalTextElement.appendChild(p);
                }
            });
            quoteElement.appendChild(additionalTextElement);
        }

        detailsElement.appendChild(quoteElement);
    }

    if (entry.source && entry.source.text) {
        const sourceElement = document.createElement('div');
        sourceElement.className = 'entry-source';
        if (entry.source.link) {
            const sourceLink = document.createElement('a');
            sourceLink.href = entry.source.link;
            sourceLink.textContent = entry.source.text;
            sourceElement.appendChild(sourceLink);
        } else {
            sourceElement.textContent = entry.source.text;
        }
        detailsElement.appendChild(sourceElement);
    }

    if (entry.context) {
        const contextElement = document.createElement('div');
        contextElement.className = 'entry-context';
        contextElement.textContent = entry.context;
        detailsElement.appendChild(contextElement);
    }

    if (entry.tags && entry.tags.length > 0) {
        const tagsElement = document.createElement('div');
        tagsElement.className = 'entry-tags';
        entry.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = `tag ${tag}`;
            tagElement.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
            tagsElement.appendChild(tagElement);
        });
        detailsElement.appendChild(tagsElement);
    }

    contentElement.appendChild(headerElement);
    contentElement.appendChild(detailsElement);

    contentElement.addEventListener('click', () => {
        contentElement.classList.toggle('expanded');
    });

    entryElement.appendChild(contentElement);
    return entryElement;
}

// Function to initialize the timeline
function initializeTimeline() {
    const timeline = document.querySelector('.timeline');
    timelineData.forEach(entry => {
        timeline.appendChild(createTimelineEntry(entry));
    });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTimeline); 