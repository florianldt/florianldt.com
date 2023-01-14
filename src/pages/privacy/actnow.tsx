import type { HeadFC } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

const Page = styled.main`
    color: #232129;
    padding: 60px 30px;
    font-family: -apple-system, Roboto, sans-serif, serif;
`;

const Heading = styled.h1`
    margin-top: 0px;
    margin-bottom: 30px;
`;

const SubHeading = styled.h3`
    margin-top: 10px;
    margin-bottom: 20px;
`;

const Paragraph = styled.p`
    margin-top: 10px;
    margin-bottom: 20px;
    line-height: 22px;
`;

const Link = styled.a``;

function ActNowPrivacyPolicyPage(): JSX.Element {
    return (
        <Page>
            <Heading>ActNow Privacy Policy</Heading>
            <Paragraph>
                This page is used to inform visitors regarding our policies with
                the collection, use, and disclosure of Personal Information if
                anyone decided to use our Service. If you choose to use our
                Service, then you agree to the collection and use of information
                in relation to this policy. The Personal Information that we
                collect is used for providing and improving the Service. We will
                not use or share your information with anyone except as
                described in this Privacy Policy.
            </Paragraph>
            <SubHeading>Information Collection and Use</SubHeading>
            <Paragraph>
                The app does not use third-party services that may collect
                information used to identify you.
            </Paragraph>
            <SubHeading>Log Data</SubHeading>
            <Paragraph>
                We want to inform you that whenever you use our Service, we do
                not collect data and information on your phone.
            </Paragraph>
            <SubHeading>Links to Other Sites</SubHeading>
            <Paragraph>
                This Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that
                these external sites are not operated by us. Therefore, we
                strongly advise you to review the Privacy Policy of these
                websites. We have no control over and assume no responsibility
                for the content, privacy policies, or practices of any
                third-party sites or services.
            </Paragraph>
            <SubHeading>Changes to This Privacy Policy</SubHeading>
            <Paragraph>
                We may update our Privacy Policy from time to time. Thus, you
                are advised to review this page periodically for any changes. We
                will notify you of any changes by posting the new Privacy Policy
                on this page. These changes are effective immediately after they
                are posted on this page.
            </Paragraph>
            <SubHeading>Contact Us</SubHeading>
            <Paragraph>
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to visit{' '}
                <Link href="florianldt.com">florianldt.com</Link>.
            </Paragraph>
        </Page>
    );
}

export default ActNowPrivacyPolicyPage;

export const Head: HeadFC = () => <title>ActNow Privacy Policy</title>;
