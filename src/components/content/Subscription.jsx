import React from "react";

import { Container, Row } from 'react-bootstrap';
// import { Col, Table, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Subscription = () => {

  return (
    <Container>
      <Row>
        <div className="InstitutionPaidPlanEntry__container___EsWPr">
          <div className="InstitutionPaidPlanPage__header___XP6hg">
            <div className="InstitutionPaidPlanPage__headerTop___3jkT7">
              <h2 className="InstitutionPaidPlanPage__heading___2nUbL">Subscription</h2>
              <Link className="InstitutionPaidPlanPage__link___29Lho" target="_blank" rel="noreferrer" href="https://www.eduflow.com/pricing" >See plan details<svg width="16" height="16" viewBox="0 0 16 16" className="Icons__icon-size___3XuUV" > <path className="fill accent-color" d="M14.7975 1.11767C14.8288 1.14267 14.8572 1.17109 14.8822 1.20235C14.8869 1.20819 14.8914 1.2141 14.8958 1.22008C14.9064 1.23448 14.9162 1.24927 14.9252 1.26442C14.9298 1.27221 14.9342 1.28009 14.9384 1.28805C14.9777 1.36286 15 1.44806 15 1.53846V5.84615C15 6.14354 14.7589 6.38462 14.4615 6.38462C14.1642 6.38462 13.9231 6.14354 13.9231 5.84615V2.83838L6.94481 9.81665C6.73453 10.0269 6.39359 10.0269 6.18331 9.81665C5.97303 9.60637 5.97303 9.26543 6.18331 9.05515L13.1615 2.07692H10.1538C9.85646 2.07692 9.61539 1.83585 9.61539 1.53846C9.61539 1.24108 9.85646 1 10.1538 1H14.4614C14.4614 1 14.4614 1 14.4614 1C14.5432 1 14.6209 1.01825 14.6904 1.0509C14.728 1.06856 14.764 1.09082 14.7975 1.11767Z" ></path> <path className="fill accent-color" d="M2.97436 4.23077C2.73634 4.23077 2.50808 4.32532 2.33978 4.49362C2.17147 4.66192 2.07692 4.89019 2.07692 5.12821V13.0256C2.07692 13.2637 2.17147 13.4919 2.33978 13.6602C2.50808 13.8285 2.73634 13.9231 2.97436 13.9231H10.8718C11.1098 13.9231 11.3381 13.8285 11.5064 13.6602C11.6747 13.4919 11.7692 13.2637 11.7692 13.0256V8.71795C11.7692 8.42057 12.0103 8.17949 12.3077 8.17949C12.6051 8.17949 12.8462 8.42057 12.8462 8.71795V13.0256C12.8462 13.5493 12.6381 14.0515 12.2679 14.4217C11.8976 14.792 11.3954 15 10.8718 15H2.97436C2.45073 15 1.94854 14.792 1.57828 14.4217C1.20801 14.0515 1 13.5493 1 13.0256V5.12821C1 4.60457 1.20801 4.10239 1.57828 3.73212C1.94854 3.36186 2.45073 3.15385 2.97436 3.15385H7.28205C7.57944 3.15385 7.82051 3.39492 7.82051 3.69231C7.82051 3.98969 7.57944 4.23077 7.28205 4.23077H2.97436Z" ></path> </svg> </Link>
            </div>
            <p className="InstitutionPaidPlanPagePlanOverview__subText___3RDff">
              This institution is on the <strong>Free plan</strong>.
            </p>
            <p className="InstitutionPaidPlanPagePlanOverview__legacyPlan___3K2x8"> You are on a legacy Free plan. On January 1st, 2022 you will be moved to our current Free plan. You will have the same features available, but your active learners limit will drop from 150 to 15. <Link href="https://www.eduflow.com/plans-before-july-1st-2021" >Read more</Link>. </p>
            <div className="Toggle__toggleComponent___1YjsP">
              <input type="checkbox" className="Toggle__toggleInput___3I4IO" id="toggle_0.05840753550693356_1628862491558" /><label className="Toggle__toggleLabel___1S4xG" for="toggle_0.05840753550693356_1628862491558" >Pay annually (save 20%)</label >
            </div>
          </div>
          <div className=" Card__card___1y4vO InstitutionPaidPlanSelector__plansContainer___3-0pk " >
            <div className=" InstitutionPaidPlanSelector__planType___BXQm_ InstitutionPaidPlanSelector__active___1kqEn " >
              <h2 className="InstitutionPaidPlanSelector__title___2n2jI">Free</h2>
              <span className="InstitutionPaidPlanSelector__price___HpY58">$0</span
              ><span>Current plan</span>
            </div>
            <div className="InstitutionPaidPlanSelector__planType___BXQm_">
              <h2 className="InstitutionPaidPlanSelector__title___2n2jI">
                Lite
                <span className="InstitutionPaidPlanSelector__minPrice___1rIqo" >Min. $100/mo</span >
              </h2>
              <span className="InstitutionPaidPlanSelector__price___HpY58" >$20 /mo /instructor</span ><button className="Button__btn___1OyPq" type="button" data-test="" data-clipboard-text="" >
                Upgrade
              </button>
            </div>
            <div className="InstitutionPaidPlanSelector__planType___BXQm_">
              <h2 className="InstitutionPaidPlanSelector__title___2n2jI"> Pro <span className="InstitutionPaidPlanSelector__minPrice___1rIqo" >Min. $400/mo</span >
              </h2>
              <span className="InstitutionPaidPlanSelector__price___HpY58" >$40 /mo /instructor</span >
              <button
                className="Button__btn___1OyPq"
                type="button"
                data-test=""
                data-clipboard-text=""
              >
                Upgrade
              </button>
            </div>
            <div className="InstitutionPaidPlanSelector__planType___BXQm_">
              <h2 className="InstitutionPaidPlanSelector__title___2n2jI">Premium</h2>
              <span className="InstitutionPaidPlanSelector__price___HpY58" >Variable pricing</span >
              <Link
                className="Button__btn___1OyPq"
                href="https://eduflow.typeform.com/to/ltqqjt"
                data-test=""
              >Request a quote
              </Link>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Subscription;
