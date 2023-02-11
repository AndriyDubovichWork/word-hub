import ActApproval from '../../../../../Components/Form/ActApproval/ActApproval';
import useApproveDeleteData from '../hooks/useApproveDeleteData';

const ApproveDelete = () => {
	const { HandleDontAskAgain, Approve, setShowApproval } = useApproveDeleteData();
	return (
		<>
			<ActApproval
				text='Do You want to delete word ?'
				rejection={{
					text: 'Cancel',
					func: () => {
						setShowApproval(false);
					},
				}}
				approval={{
					text: 'approve',
					func: () => {
						Approve();
						setShowApproval(false);
					},
				}}
				checkBox={{
					text: 'Dont Ask Again',
					func: () => {
						HandleDontAskAgain();
					},
				}}
			/>
		</>
	);
};

export default ApproveDelete;
