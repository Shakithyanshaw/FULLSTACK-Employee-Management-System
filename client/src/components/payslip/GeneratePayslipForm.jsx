import { Plus } from 'lucide-react';
import { useState } from 'react';

const GeneratePayslipForm = ({ employees, onSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen)
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="btn-primary flex items-center gap-2"
      >
        <Plus className="w-4 h-4" /> Generate Payslip
      </button>
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Generate payslips form</h1>
    </div>
  );
};

export default GeneratePayslipForm;
