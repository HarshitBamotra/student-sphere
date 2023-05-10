import * as React from 'react';
import './aboutus.css'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Margin } from '@mui/icons-material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    // borderBottom: `10px solid ${theme.palette.divider}`,
    // borderBottom: `10px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    // borderTopLeftRadius: '10px',
    // borderTopRightRadius: '10px',
    background: 'url("./bg_footer.png")',
    // backgroundColor:'#2a2a2a',

}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#fff' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(255, 255, 255, .03)',
    flexDirection: 'row-reverse',
    borderBottom: '2px solid rgba(255, 255,255, .125)',
    backgroundColor: '#191919',
    background: ' url("./bg.png")',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderBottom: '2px solid rgba(255, 255,255, .125)',
    // borderTop: '2px solid rgba(255, 255,255, .125)',
    // borderRadius: '10px',
    background: ' url("./bg.png")',
    // backgroundColor: '#191919',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='faqbanadu'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography className='Accordian'>Do I need anything special to use it?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='Accordian'>
                        All you need to use STUDIFY is an internet connection or a mobile phone. Join us here!.
                        Once you're in, begin finding and following accounts whose tweets interest you. We'll recommend great accounts once you're signed up.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography className='Accordian'>What is the difference after purchasing premium </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='Accordian'>
                        <p>
                            The Studify app enables you to get unlimited access to all contents.<br />
                            Here are some of the top features that you can unlock after purchasing premium
                        </p>
                        <ul>
                            <li>AD free user experience</li>
                            <li>100 GB cloud storage</li>
                            <li>Unlimited Connections</li>
                            <li>Mentoring sessions</li>
                            <li>IEEE membership</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography className='Accordian'>How to spread a tweet beyond audience</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='Accordian'>
                        I’d love some advice on tweeting people I don’t know or follow with information about our company’s campaign. I don’t want to spam and annoy!
                        <br />
                        Getting extra attention to your campaign can be done a couple different ways. If you’re open to paying a bit for Twitter advertising, you can opt in to have a new or existing tweet appear in the timeline of other folks. You pay when a user engages with your tweet, and the average bid per engagement tends to be around $1.50 or $2.00. (You can also run campaigns to get more followers, more clicks, and more leads.)
                        <br />
                        Twitter ads also lets you fine-tune your ad so it reaches a targeted audience based on region, language, device, keywords, interest, and/or related followers.
                        <br />
                        For a free way to help spread your tweet, use hashtags.
                        <br />
                        Tweets with hashtags receive two times more engagement than those without. Why? One explanation is that hashtags are easily searchable. If you’re running a campaign for your nonprofit and include the hashtag #nonprofits, anyone searching for the term—whether they follow you or not—could see your tweet.
                        <br />
                        Along with adding hashtags to your content, you can also use hashtags to find relevant folks to follow. Searching for “#nonprofits” will show you those who are using the hashtag. Follow these users. When they follow you back, you can start a conversation and intro your campaign.


                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography className='Accordian'>Top 5 reasons why social media is worth the investment</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='Accordian'>
                        <p>
                            As a social media company about to launch, what are the top 5 things I can tell potential clients that will persuade them that social media works and is worth the time/money to invest in? I can go with the usual build brand awareness, customer engagement etc but even this seems to be met with skepticism – does it make me money? That’s what they want to know. How would you answer that question?
                            <br />
                            Building brand awareness and customer engagement are really great reasons for brands to join social media! Along with those, here are five more that might help convince someone to join.
                        </p>
                        <ul className='Accordianwalaul'>
                            <li>Social media is a key driver of traffic to your website.
                            </li>
                            <p>
                                If a key goal is to get more people in the proverbial door, then social media is essential. SEO is like the phone book. Social media is like word of mouth. And you can track the effect of this word-of-mouth traffic by digging into your Google Analytics reports.
                                <br />
                                In Google Analytics, go to Acquisition {'>'} Channels to see the high-level breakdown of where your website traffic comes from. Here’s a look at the amount of traffic that social media brings our bufferapp.com domain: 15 percent directly from social, and possibly more via word-of-mouth direct traffic and visits from the blog via social media.
                            </p>
                            <li> Social media influences buying behavior.
                            </li>
                            <p>This effect is especially true for millenials, according to a Harris Interactive poll.
                                68% of 18-to-34-year-old social media users surveyed were at least somewhat likely to make a purchase after seeing a friend’s post.</p>

                            <li>Customers expect and appreciate support via social media</li>
                            <p>
                                Not only is social media great for engaging with your customers, it’s also really useful for helping them. Customer service on social media is growing more and more essential, and the customers are leading the charge. They expect to find solutions on social media, as this report from Lithium Technologies states:
                                <br />
                                More than half of Twitter users actively engage with brands via the social networking platform and nearly half prefer Twitter to other forms of communication when they have questions about a company’s products or services.
                            </p>
                            <li>People are likely already talking about your brand on social media.</li>
                            <p>Set up Mention alerts for your brand name or keywords, and you’re likely to find that there are conversations happening all the time on social media about your company. You can participate in these conversations if you’re on social media.</p>
                            <li>You can measure ROI, however you want.</li>
                            <p>“Does social media make me money?” That figures to be a key question that a lot of executives might ask. And there are definitely ways of finding out.
                                <br />
                                You can dig into Google Analytics and set up funnels and goals and conversions. This’ll give you one view of ROI. Quick Sprout has a great guide to getting this set up.
                                <br />
                                You can also aim to measure return in other ways—market share, mentions, sentiment, followers, etc. And the great thing about social media is that the “investment” part of “return on investment” figures to be minimal. Social media channels are free to join. The main costs you might incur is the time and salary of a social media manager and any advertising or tools you choose to buy. The barrier of entry into social is minimal.
                            </p>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}