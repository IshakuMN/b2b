import Nav from "./nav";
import Hero from "./hero";
import Competencies from "./competencies";
import Suppliers from "./suppliers";
import Reliability from "./reliability";
import AboutService from "./aboutService";
import IndustryExpertise from "./industryExpertise";
import Specialist from "./specialist";
import CooperationStages from "./cooperationStages";
import CommissionTable from "./commissionTable";
import CommissionService from "./commissionService";
import ServiceOptions from "./serviceOptions";
import AdditionalService from "./additionalService";
import TaxConsultation from "./taxConsultation";
import TaxConsultation2 from "./taxConsultation2";
import NewUser from "@/app/newUser";
import NavButtom from "@/app/navButtom";
import TaxpayerService from "@/app/taxpayerService";

export default function Home() {
    return (
        <main className="overflow-hidden min-w-80">
            <Nav/>
            <Hero/>
            <Competencies/>
            <Suppliers/>
            <Reliability/>
            <AboutService/>
            <IndustryExpertise/>
            <Specialist/>
            <CooperationStages/>
            <CommissionTable/>
            <CommissionService/>
            <ServiceOptions/>
            <AdditionalService/>
            <TaxConsultation/>
            <TaxConsultation2/>
            <NewUser/>
            <TaxpayerService/>
            <NavButtom/>
        </main>
    );
}
