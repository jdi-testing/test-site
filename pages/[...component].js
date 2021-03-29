import { useRouter } from 'next/router'

import ButtonGroup from '../src/components/ButtonGroup/ButtonGroup';

const PageComponent = () => {
    const router = useRouter()
    console.log(router.query, 'router.query')
    let componentName
    
    if(router.query.component) {
        componentName = router.query.component[0] 
    }

    return <div>
        {componentName === 'home' && <ButtonGroup />}
    </div>

}

export default PageComponent