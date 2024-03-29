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

const BulletList = styled.ul`
    margin-top: 10px;
    margin-bottom: 20px;
`;

const ListItem = styled.li`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Link = styled.a``;

function BudPrivacyPolicyPage(): JSX.Element {
    return (
        <Page>
            <Heading>Bud Privacy Policy</Heading>
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
                The app does use third-party services that may collect
                information used to identify you.
            </Paragraph>
            <Paragraph>
                Link to privacy policy of third party service providers used by
                the app
            </Paragraph>
            <Paragraph>
                <Link href="https://www.google.com/policies/privacy/">
                    Google Services
                </Link>
            </Paragraph>
            <SubHeading>Log Data</SubHeading>
            <Paragraph>
                We want to inform you that whenever you use our Service, in a
                case of an error in the app we collect data and information
                (through third-party products) on your phone called Log Data.
                This Log Data may include information such as your device
                Internet Protocol (“IP”) address, device name, operating system
                version, the configuration of the app when utilizing our
                Service, the time and date of your use of the Service, and other
                statistics.
            </Paragraph>
            <SubHeading>Cookies</SubHeading>
            <Paragraph>
                Cookies are files with a small amount of data that are commonly
                used as anonymous unique identifiers. These are sent to your
                browser from the websites that you visit and are stored on your
                device’s internal memory.
            </Paragraph>
            <Paragraph>
                This Service does not use these “cookies” explicitly. However,
                the app may use third party code and libraries that use
                “cookies” to collect information and improve their services. You
                have the option to either accept or refuse these cookies and
                know when a cookie is being sent to your device. If you choose
                to refuse our cookies, you may not be able to use some portions
                of this Service.
            </Paragraph>
            <SubHeading>Service Providers</SubHeading>
            <Paragraph>
                We may employ third-party companies and individuals due to the
                following reasons:
            </Paragraph>
            <BulletList>
                <ListItem>To facilitate our Service;</ListItem>
                <ListItem>To provide the Service on our behalf;</ListItem>
                <ListItem>To perform Service-related services; or</ListItem>
                <ListItem>
                    To assist us in analyzing how our Service is used.
                </ListItem>
            </BulletList>
            <Paragraph>
                We want to inform users of this Service that these third parties
                have access to your Personal Information. The reason is to
                perform the tasks assigned to them on our behalf. However, they
                are obligated not to disclose or use the information for any
                other purpose.
            </Paragraph>
            <SubHeading>Security</SubHeading>
            <Paragraph>
                We value your trust in providing us your Personal Information,
                thus we are striving to use commercially acceptable means of
                protecting it. But remember that no method of transmission over
                the internet, or method of electronic storage is 100% secure and
                reliable, and we cannot guarantee its absolute security.
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

export default BudPrivacyPolicyPage;

export const Head: HeadFC = () => <title>Bud Privacy Policy</title>;
