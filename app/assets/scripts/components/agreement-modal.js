'use strict';
import React, {PropTypes as T} from 'react';

var AgreementModal = React.createClass({
  propTypes: {
    onClose: T.func,
    agreementType: T.string
  },

  render: function () {
    const isCodeOfPractice = this.props.agreementType === 'codeOfPractice';
    return (
      <section className="modal modal--large agreement-modal">
        <div className="modal__inner">
          {isCodeOfPractice
            ? <div className="agreement__language">
              <h1 className="agreement__title heading--xlarge">
                  Code Of Practice
              </h1>
              <div className="agreement__content">
                <p>
                    This Code of Practice defines the Civil Society Center for
                    Digital Resilience (CiviCDR) Information Handling Policy,
                    Vulnerability Disclosure Policy, and Code of Conduct, as
                    well as outlining the stakeholder expectations and
                    responsibilities established in the Partner Agreement. This
                    document is a statement of intent for the design,
                    development and implementation of CiviCDR’s full scope of
                    services. A limited scope of services is currently in
                    operation, for which all principles here remain true.
                </p>
                <h2 className="agreement__title heading--small">
                    Information Handling Policy
                </h2>
                <p>
                    CiviCDR will request only the information required to assess
                    a partner’s problem and how to assist them. This may include
                    description of problem, measures taken or relevant files.
                    Unless assistance is requested, we will not be privy to
                    incident details between the partner and Service Provider
                    (SP). (Such assistance may be provided where translation or
                    other support is requested.) As a general rule, information
                    requested by CiviCDR and any disclosure of information to
                    SPs, is done on a need-to-know basis, while protecting
                    stakeholders in an incident as much as possible without
                    turning the incident information into void information, not
                    useable for incident handling by the receiving party.
                    Incident information (other than number and type of
                    incidents) will be deleted once ticket is closed.
                </p>
                <p>
                    Private incident information will never be shared with
                    donors or other stakeholders. Donors will only be privy to
                    threat notifications and quantitative project monitoring
                    data such as number of incidents dealt with. Non-sensitive
                    information related to community threats will be extracted
                    from incidents and shared as a community alert, in order to
                    help prevent other partners avoid similar incidents.
                    Sensitive incident information may be shared privately with
                    specific partners if they are at risk from the incident. All
                    sharing of information will be conducted in coordination and
                    with the approval of the partners concerned. However, where
                    a vulnerability may seriously affect the security of CiviCDR
                    partners, and the relevant partner is non responsive, we
                    reserve the right to notify the affected stakeholders. (See
                    Vulnerability Disclosure Policy below)
                </p>
                <p>
                    CiviCDR and the SPs we work with will handle all information
                    responsibly and protect it against inadvertent disclosure to
                    unauthorised parties. The security of the methods of storing
                    and transmitting information inside or outside the team,
                    will be appropriate to its sensitivity. In general this
                    means that sensitive information will be kept and sent only
                    in encrypted formats or over secure channels – this
                    explicitly includes back-ups of sensitive information.
                </p>
                <p>
                    CiviCDR recognises and supports the ISTLP (Information
                    Sharing Traffic Light Protocol). Note that an "Information
                    Exchange" can be either in person, online, or over the
                    phone.
                </p>
                <p>
                  <strong>RED</strong> Non-disclosable Information and
                    restricted to representatives participating in the
                    Information Exchange themselves only. Representatives must
                    not disseminate the information outside of the Exchange.
                </p>
                <p>
                  <strong>AMBER</strong> Limited Disclosure and restricted to
                    members of the Information Exchange; those within their
                    organisations and/or constituencies (whether direct
                    employees, consultants, contractors or outsource-staff
                    working in the organisation) who have a NEED TO KNOW in
                    order to take action.
                </p>
                <p>
                  <strong>GREEN</strong> Information can be shared with other
                    organisations, Information Exchanges or individuals in the
                    community at large, but not published or posted on the web.
                </p>
                <p>
                  <strong>WHITE</strong> Information that is for public,
                    unrestricted dissemination, publication, web-posting or
                    broadcast. Any member of the Information Exchange may
                    publish the information, subject to copyright.
                </p>
                <h2 className="agreement__title heading--small">
                    Vulnerability Disclosure Policy
                </h2>
                <p>
                    CiviCDR adheres to a do no harm approach. Vulnerabilities
                    reported to CiviCDR which may seriously affect the security
                    of our partners will be disclosed to stakeholders three
                    weeks after the initial report. Extenuating circumstances,
                    such as active exploitation, threats of an especially
                    serious (or trivial) nature, or situations that require
                    changes to an established standard may result in earlier or
                    later disclosure. CiviCDR will work with community members
                    to establish a rating system for vulnerabilities to
                    determine level of seriousness and use it to define what
                    falls under the CiviCDR remit. Until then, determinations
                    will be made by the CiviCDR team and public disclosures will
                    not be made without consultation of its Advisory Committee.
                    It is the goal of this policy to balance the need of the
                    public to be informed of security vulnerabilities with
                    organisations’ need for time to respond effectively.
                </p>
                <p>The general disclosure schedule is as follows:</p>
                <p>
                  <strong>Step 1:</strong> Vulnerabilities reported to us will
                    be forwarded to the affected organisation as soon as
                    practical after we receive the report. They will be asked to
                    respond, and if possible, address the issue within a week.
                    If the organisation is responsive and is working to resolve
                    the issue, CiviCDR will either offer support or extra time
                    as appropriate. This will depend on severity of the issue
                    and potential harm.
                </p>
                <p>
                  <strong>Step 2:</strong> If there is no response after two
                    weeks the issue may be raised with relevant members of the
                    community or service providers if appropriate.
                </p>
                <p>
                  <strong>Step 3:</strong> If, a full three weeks after
                    notification, no solution has been reached the issue will be
                    disclosed to stakeholders. This may include the public or
                    donors if deemed appropriate. In extenuating circumstances
                    this disclosure may be reconsidered, especially when the
                    organisation is cooperative and working to fix the issue.
                </p>
                <p>
                    The final determination of a disclosure schedule will be
                    based on the best interests of the CiviCDR community
                    overall.
                </p>
                <p>
                    Disclosures made by CiviCDR will include credit to the
                    reporter unless otherwise requested by the reporter. We will
                    apprise any affected vendors of our publication plans and
                    negotiate alternate publication schedules with the affected
                    vendors when required. The name and contact information of
                    the reporter will be forwarded to the affected vendors
                    unless otherwise requested by the reporter. We will advise
                    the reporter of significant changes in the status of any
                    vulnerability he or she reported to the extent possible
                    without revealing information provided to us in confidence.
                </p>
                <h2 className="agreement__title heading--small">
                    Partner Agreement
                </h2>
                <p>
                    The Partner Agreement outlines the explicit expectations and
                    responsibilities each CSO has by becoming a partner of
                    CiviCDR.
                </p>
                <h2 className="agreement__title heading--small">
                    Code of Conduct
                </h2>
                <p>
                    This code of conduct applies to all CiviCDR spaces, either
                    in online interactions or associated events or social
                    gatherings. Partners, Service Providers and participants are
                    responsible for knowing and abiding by the rules detailed
                    below.
                </p>
                <p>
                    CiviCDR is committed to providing a safe and welcoming
                    environment for addressing and discussing issues related to
                    the digital security of the communities in which we work. In
                    particular, we aim to banish any shame or stigma surrounding
                    partners’ digital security mistakes or hacking, so we
                    encourage all those involved to approach interactions with
                    open and supportive attitudes, and to engage constructively
                    with others at all times.
                </p>
                <p>
                    CiviCDR is dedicated to providing a harassment-free
                    experience for everyone, regardless of gender, gender
                    identity and expression, age, sexual orientation,
                    disability, physical appearance, body size, race, ethnicity,
                    religion (or lack thereof), technology choices, skillset or
                    level of knowledge. We do not tolerate harassment of
                    community members in any form.
                </p>
                <p>
                    Anyone who violates this code of conduct may be sanctioned
                    or expelled from these spaces at the discretion of the
                    CiviCDR team.
                </p>
                <h2 className="heading--small">Harassment</h2>
                <p>
                    Harassment may occur online or in person. Examples of
                    unacceptable behaviours include:
                </p>
                <ol>
                  <li>
                      Offensive comments which reinforce social structures of
                      domination and/or are related to gender, gender identity
                      and expression, sexual orientation, disability, mental
                      illness, neuro(a)typicality, physical appearance, body
                      size, age, race, or religion.
                  </li>
                  <li>
                      Unwelcome comments regarding a person’s lifestyle choices
                      and practices, including those related to food, health,
                      parenting, drugs, and employment.
                  </li>
                  <li>
                      Deliberate misgendering or use of ‘dead’ or rejected
                      names.
                  </li>
                  <li>
                      Gratuitous or off-topic sexual images or behaviour in
                      spaces where they’re not appropriate.
                  </li>
                  <li>
                      Physical contact and simulated physical contact (eg,
                      textual descriptions like “hug” or “backrub”) without
                      consent or after a request to stop.
                  </li>
                  <li>Threats of violence.</li>
                  <li>
                      Incitement of violence towards any individual, including
                      encouraging a person to commit suicide or to engage in
                      self-harm.
                  </li>
                  <li>Deliberate intimidation.</li>
                  <li>Stalking or following.</li>
                  <li>
                      Harassing photography or recording, including logging
                      online activity for harassment purposes.
                  </li>
                  <li>
                      Sustained disruption of discussion, talks or other events.
                  </li>
                  <li>Unwelcome sexual attention or physical contact.</li>
                  <li>
                      Pattern of inappropriate social contact, such as
                      requesting/assuming inappropriate levels of intimacy with
                      others Continued one-on-one communication after requests
                      to cease.
                  </li>
                  <li>
                      Deliberate “outing” of any aspect of a person’s identity
                      without their consent except as necessary to protect
                      vulnerable people from intentional abuse.
                  </li>
                  <li>Publication of non-harassing private communication.</li>
                  <li>
                      Publishing another persons’ private information, such as
                      physical or electronic addresses, without explicit
                      permission.
                  </li>
                  <li>
                      Advocating for, or encouraging, any of the above
                      behaviour.
                  </li>
                  <li>Drugging food or drink.</li>
                  <li>
                      Violating the event privacy policy in order to attract
                      negative attention to an attendee.
                  </li>
                  <li>
                      Enlisting the help of others, whether in person or online,
                      in order to target an attendee.
                  </li>
                </ol>
                <p>
                    We prioritise marginalised people’s safety over privileged
                    people’s comfort. Our team will not act on complaints
                    regarding:
                </p>
                <ul>
                  <li>
                      ‘Reverse’ -isms, including ‘reverse racism,’ ‘reverse
                      sexism,’ and ‘cisphobia’
                  </li>
                  <li>
                      Reasonable communication of boundaries, such as “leave me
                      alone,” “go away,” or “I’m not discussing this with you.”
                  </li>
                  <li>Communicating in a ‘tone’ you don’t find congenial</li>
                  <li>
                      Criticising racist, sexist, cissexist, or otherwise
                      oppressive behavior or assumptions
                  </li>
                </ul>
                <p>
                    Let someone leave a conversation that makes them
                    uncomfortable, and do not follow people who asked to be left
                    alone. If you discuss difficult topics that may be traumatic
                    for participants, provide warnings so people may leave a
                    conversation or plan coping strategies.
                </p>
                <h2 className="heading--small">Reporting</h2>
                <p>
                    If you are being harassed, notice that someone else is being
                    harassed, or have any other concerns, please notify{' '}
                  <a href="mailto:holly@smallmedia.org.uk">
                      holly@smallmedia.org.uk
                  </a>{' '}
                    or, if more appropriate{' '}
                  <a href="fereidoon@asl19.org">fereidoon@asl19.org</a>.
                    Reports are confidential. You will not be asked to take
                    actions that make you feel unsafe.
                </p>
                <p>
                    This code of conduct applies to CiviCDR spaces, but if you
                    are being harassed by a person involved in CiviCDR outside
                    our spaces, we still want to know about it. We will take all
                    good-faith reports of harassment seriously. This includes
                    harassment outside our spaces and harassment that took place
                    at any point in time. The abuse team reserves the right to
                    exclude people from CiviCDR based on their past behavior,
                    including behavior outside CiviCDR spaces. We will respect
                    confidentiality requests for the purpose of protecting
                    victims of abuse. At our discretion, we may publicly name a
                    person about whom we’ve received harassment complaints, or
                    privately warn third parties about them, if we believe that
                    doing so will increase the safety of partners or people
                    involved with CiviCDR. We will not name harassment victims
                    without their affirmative consent.
                </p>
                <p>
                    Harassment and other code of conduct violations reduce the
                    value of our community for everyone. We want you to be happy
                    in our community as people like you make it a better place.
                    If the person who is harassing you is part of the organising
                    staff, they will recuse themselves from handling your
                    incident. We will respond as promptly as we can.
                </p>
                <h2 className="heading--small">Consequences</h2>
                <p>
                    Participants asked to stop any harassing behavior are
                    expected to comply immediately. If a participant engages in
                    harassing behavior, Response Team may take any action they
                    deem appropriate, up to and including expulsion from all
                    CiviCDR spaces and identification of the participant as a
                    harasser to other CiviCDR members or the general public.
                </p>
                <h2 className="heading--small">Licensing</h2>
                <p>
                    This policy is licensed under the Creative Commons Zero
                    license. It is public domain, no credit and no open
                    licensing of your version is required.
                </p>
                <p>
                    This anti-harassment policy is based on the example policy
                    from the{' '}
                  <a href="http://geekfeminism.wikia.com/wiki/Community_anti-harassment">
                      Geek Feminism wiki
                  </a>, created by the Geek Feminism community, and also the
                    Code Of Conduct Generator.
                </p>
              </div>
            </div>
            : ''}
          {!isCodeOfPractice
            ? <div className="agreement__language">
              <h1 className="agreement__title heading--xlarge">
                  CiviCDR Partner Agreement
              </h1>
              <div className="agreement__content">
                <h2 className="agreement__title heading--small">
                    Expectations
                </h2>
                <ul>
                  <li>On-boarding</li>
                  <ul>
                    <li>
                        Partners will be assisted in reaching a baseline level
                        of digital security and be brought through how to engage
                        with the CiviCDR platform.
                    </li>
                  </ul>
                  <li>Alerts</li>
                  <ul>
                    <li>
                        Partners will receive alerts on threats and
                        vulnerabilities specific to their community. These
                        alerts will be non-technical, graded by level of
                        urgency, and include easy-to-follow risk mitigation
                        measures and remedies. Technical alerts will also be
                        made available for partners’ IT teams. Partners will
                        also receive monthly updates on general threats and
                        vulnerabilities specific to their region and the
                        software they use, also with easy-to-follow risk
                        mitigation measures.
                    </li>
                  </ul>
                  <li>Incident Response</li>
                  <ul>
                    <li>
                        If a partner comes under digital attack CiviCDR will
                        ensure they get the right help quickly by assisting with
                        immediate response and connecting them to an appropriate
                        Service Provider. Translation and and general assistance
                        can also be provided.
                    </li>
                  </ul>
                  <li>Prevention</li>
                  <ul>
                    <li>
                        Partners will receive assistance in preventing digital
                        security incidents.
                    </li>
                  </ul>
                  <li>
                      CiviCDR and the Service Providers it works with will keep
                      partners’ data secure and adhere to the standards outlined
                      in the Code of Practice.
                  </li>
                  <li>
                      CiviCDR will take all operational decisions based on what
                      benefits community of partner CSOs.
                  </li>
                </ul>

                <h2 className="agreement__title heading--small">
                    Responsibilities
                </h2>
                <ul>
                  <li>
                      Partners will read and agree to the CiviCDR Code of
                      Practice.
                  </li>
                  <li>
                      Partners will provide time to engage with CiviCDR
                      on-boarding team. On-boardings will be tailored to suit
                      each partner and time taken will be dependent on their
                      needs and availability.
                  </li>
                  <li>
                      Partners will read alerts when they are sent out, share
                      them with all relevant team members (regional team and IT
                      team), and take the recommended mitigation measures where
                      deemed appropriate.
                  </li>
                  <li>
                      Partners will make an effort to notify CiviCDR when they
                      come under targeted attack - even if the attack failed or
                      their own IT team was able to fix the issue - so as to
                      help safeguard others in the community. What is considered
                      a targeted attack will be defined with each partner during
                      the on-boarding process.
                  </li>
                  <li>
                      Partners will agree to CiviCDR sharing non-sensitive
                      information about incidents in community-wide alerts in
                      order to help prevent other partners avoid similar
                      incidents.
                  </li>
                  <li>
                      Partners will agree to share all relevant incident
                      information privately with any partners who may be
                      adversely affected by a specific attack.
                  </li>
                </ul>
              </div>
            </div>
            : ''}
          <div className="warning__group">
            <button
              className="button button--large button--primary"
              onClick={this.props.onClose}
            >
              Close
            </button>
            <button
              className="modal__button-dismiss"
              title="close"
              onClick={this.props.onClose}
            />
          </div>
        </div>
      </section>
    );
  }
});

module.exports = AgreementModal;
